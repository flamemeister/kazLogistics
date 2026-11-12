import test from "node:test";
import assert from "node:assert/strict";
import {
  experienceCopy,
  journeyProgress,
  journeyIndex,
  journeyStages,
} from "../src/experience/copy.js";

test("cargo story clamps before/after the sticky interval and reaches all four stages", () => {
  const height = 3400,
    viewport = 1000,
    inset = 90,
    distance = height - viewport + inset;
  assert.equal(journeyProgress(1000, height, viewport), 0);
  assert.equal(journeyProgress(-10000, height, viewport), 1);
  for (let stage = 0; stage < 4; stage++) {
    const top = inset - distance * ((stage + 0.5) / 4);
    assert.equal(journeyIndex(journeyProgress(top, height, viewport)), stage);
  }
  assert.equal(journeyIndex(1), 3);
  assert.ok(Number.isFinite(journeyProgress(0, 100, 1000)));
});
test("new experience controls are localized in all four languages and stages link to existing services", () => {
  for (const language of ["ru", "kk", "en", "zh"]) {
    assert.deepEqual(
      Object.keys(experienceCopy[language]).sort(),
      Object.keys(experienceCopy.ru).sort(),
    );
    assert.ok(
      Object.values(experienceCopy[language]).every(
        (value) => typeof value === "string" && value.length > 0,
      ),
    );
  }
  assert.deepEqual(
    journeyStages.map((stage) => stage.slug),
    ["container", "railway", "auto", "air"],
  );
});
