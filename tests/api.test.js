import test from "node:test";
import assert from "node:assert/strict";
import { postJSON } from "../src/lib/api.js";
test("request preserves the existing backend payload and accepts 201", async (t) => {
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "/api/");
    assert.equal(options.method, "POST");
    assert.deepEqual(JSON.parse(options.body), {
      name: "Example",
      phone: "+70000000000",
    });
    assert.equal(options.headers["Content-Type"], "application/json");
    assert.ok(options.signal instanceof AbortSignal);
    return new Response(JSON.stringify({ ok: true }), { status: 201 });
  });
  assert.deepEqual(
    await postJSON("/api/", { name: "Example", phone: "+70000000000" }),
    { ok: true },
  );
});
test("server failure cannot be displayed as success", async (t) => {
  t.mock.method(
    globalThis,
    "fetch",
    async () => new Response("{}", { status: 500 }),
  );
  await assert.rejects(postJSON("/api/", {}), /500/);
});
test("empty successful response is supported", async (t) => {
  t.mock.method(
    globalThis,
    "fetch",
    async () => new Response(null, { status: 204 }),
  );
  assert.deepEqual(await postJSON("/api/", {}), {});
});
