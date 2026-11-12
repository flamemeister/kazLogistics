import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { validateStyleMin } from "@maplibre/maplibre-gl-style-spec";
import {
  OFFICE,
  DIRECTIONS_URL,
  REGIONS,
  ARCS,
  greatCircle,
  movingPoints,
  fitGlobeZoom,
} from "../src/maps/geography.js";
import { globeStyle } from "../src/maps/globeStyle.js";
import { getMapCopy } from "../src/maps/copy.js";

test("office marker and external directions retain the original coordinates", () => {
  assert.deepEqual(OFFICE, [76.93376998601416, 43.25156659873732]);
  const url = new URL(DIRECTIONS_URL);
  assert.equal(
    url.searchParams.get("destination"),
    "43.25156659873732,76.93376998601416",
  );
  assert.equal(url.searchParams.get("api"), "1");
  assert.equal(url.searchParams.has("origin"), false);
});
test("great-circle interpolation follows the equator without distorting endpoints", () => {
  const arc = greatCircle([0, 0], [90, 0], 10);
  assert.deepEqual(arc[0], [0, 0]);
  assert.deepEqual(arc[10], [90, 0]);
  assert.ok(Math.abs(arc[5][0] - 45) < 1e-8);
  assert.ok(Math.abs(arc[5][1]) < 1e-8);
  assert.deepEqual(greatCircle([76, 43], [76, 43], 2), [
    [76, 43],
    [76, 43],
    [76, 43],
  ]);
});
test("responsive globe fits both a narrow phone and a fullscreen viewport", () => {
  for (const [width, height] of [
    [304, 420],
    [700, 610],
    [1440, 1000],
  ]) {
    const zoom = fitGlobeZoom(width, height);
    const diameter = (512 * 2 ** zoom) / Math.PI;
    assert.ok(diameter < Math.min(width, height));
    assert.ok(diameter > Math.min(width, height) * 0.75);
  }
});
test("all schematic arcs and animated particles stay within valid map bounds", () => {
  for (const arc of ARCS) {
    assert.deepEqual(arc.coordinates[0], OFFICE);
    for (const [lon, lat] of arc.coordinates) {
      assert.ok(Number.isFinite(lon) && Math.abs(lon) <= 180);
      assert.ok(Number.isFinite(lat) && Math.abs(lat) <= 90);
    }
  }
  for (const progress of [0, 0.25, 0.99, 1, 1.5]) {
    const points = movingPoints(progress, "china");
    assert.equal(points.features.length, REGIONS.length);
    assert.equal(
      points.features.filter((f) => f.properties.selected).length,
      1,
    );
    assert.ok(
      points.features.every((f) =>
        f.geometry.coordinates.every(Number.isFinite),
      ),
    );
  }
});
test("office and globe styles validate against the installed renderer specification", () => {
  const office = JSON.parse(
    readFileSync(new URL("../public/maps/office-style.json", import.meta.url)),
  );
  for (const style of [office, globeStyle()])
    assert.deepEqual(
      validateStyleMin(style).map((e) => e.message),
      [],
    );
  assert.equal(globeStyle().projection.type, "globe");
});
test("map controls and region buttons have text in all four languages", () => {
  for (const language of ["kk", "ru", "en", "zh"]) {
    const copy = getMapCopy(language);
    assert.equal(copy.regions.length, REGIONS.length);
    for (const key of [
      "geography",
      "schematic",
      "directions",
      "recenter",
      "pause",
      "play",
      "fullscreen",
      "loading",
      "unavailable",
    ])
      assert.ok(copy[key]?.trim(), `${language}.${key}`);
  }
});
