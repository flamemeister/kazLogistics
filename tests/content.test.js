import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { services, stages } from "../src/data/services.js";
const hashes = JSON.parse(
  readFileSync(new URL("./content-hashes.json", import.meta.url)),
);
for (const lang of ["kk", "ru", "en", "zh"]) {
  test(`${lang}: original wording is byte-for-byte unchanged`, () => {
    const file = readFileSync(
      new URL(`../src/locales/${lang}/translation.js`, import.meta.url),
    );
    assert.equal(createHash("sha256").update(file).digest("hex"), hashes[lang]);
  });
  test(`${lang}: every service has complete content for the shared template`, async () => {
    const { default: content } = await import(
      `../src/locales/${lang}/translation.js`
    );
    for (const service of services) {
      const block = content[service.key];
      assert.ok(block.title, service.key);
      assert.equal(
        Object.keys(block.services.items).length,
        service.count,
        `${service.key} service count`,
      );
      for (const key of service.advantages) {
        assert.equal(typeof block.advantages.items[key].title, "string");
        assert.equal(typeof block.advantages.items[key].text, "string");
      }
      if (service.key !== "containerDepot")
        stages.forEach((key, i) =>
          assert.equal(
            typeof block.stages.items[service.key === "auto" ? i + 1 : key],
            "string",
          ),
        );
      if (service.details)
        for (let i = 1; i <= service.details; i++)
          assert.equal(typeof block.details[i].text, "string");
      else assert.equal(typeof block.text.intro.p1, "string");
    }
  });
}
