import test from "node:test";
import assert from "node:assert/strict";
import { statSync } from "node:fs";
import { services } from "../src/data/services.js";
import { serviceVideos } from "../src/data/serviceVideos.js";

test("all seven service heroes have deployable desktop, mobile and poster media", () => {
  assert.deepEqual(
    Object.keys(serviceVideos).sort(),
    services.map((service) => service.slug).sort(),
  );
  for (const service of services) {
    const media = serviceVideos[service.slug];
    for (const [kind, path] of Object.entries(media)) {
      assert.ok(
        path.startsWith("/media/"),
        `${service.slug}: ${kind} stays same-origin`,
      );
      const file = statSync(new URL(`../public${path}`, import.meta.url));
      assert.ok(
        file.isFile() && file.size > 1000,
        `${service.slug}: ${kind} exists and is nonempty`,
      );
    }
  }
});
