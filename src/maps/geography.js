// Preserved from the original Contacts Google Maps embed: longitude, latitude.
export const OFFICE = [76.93376998601416, 43.25156659873732];
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE[1]},${OFFICE[0]}&travelmode=driving`;

// These are schematic regional anchors, not branches, terminals, or exact routes.
// Regions are taken from auto.details.1.text in the existing translation files.
export const REGIONS = [
  { id: "china", center: [105, 35] },
  { id: "cis", center: [62, 55] },
  { id: "baltics", center: [25, 57] },
  { id: "western-europe", center: [4, 49] },
  { id: "central-europe", center: [15, 49] },
];
export function fitGlobeZoom(width, height) {
  const diameter = Math.max(160, Math.min(width, height) * 0.84);
  return Math.max(0.2, Math.min(2.6, Math.log2((diameter * Math.PI) / 512)));
}
const radians = (value) => (value * Math.PI) / 180;
const degrees = (value) => (value * 180) / Math.PI;
function vector([lon, lat]) {
  const p = radians(lat),
    l = radians(lon);
  return [Math.cos(p) * Math.cos(l), Math.cos(p) * Math.sin(l), Math.sin(p)];
}
export function greatCircle(start, end, steps = 80) {
  const a = vector(start),
    b = vector(end);
  const angle = Math.acos(
    Math.max(
      -1,
      Math.min(
        1,
        a.reduce((sum, v, i) => sum + v * b[i], 0),
      ),
    ),
  );
  if (angle < 1e-8) return Array.from({ length: steps + 1 }, () => [...start]);
  const sin = Math.sin(angle);
  return Array.from({ length: steps + 1 }, (_, i) => {
    if (i === 0) return [...start];
    if (i === steps) return [...end];
    const t = i / steps;
    const v = a.map(
      (value, j) =>
        (value * Math.sin((1 - t) * angle)) / sin +
        (b[j] * Math.sin(t * angle)) / sin,
    );
    return [
      degrees(Math.atan2(v[1], v[0])),
      degrees(Math.atan2(v[2], Math.hypot(v[0], v[1]))),
    ];
  });
}
export const ARCS = REGIONS.map((region) => ({
  ...region,
  coordinates: greatCircle(OFFICE, region.center),
}));
export const ROUTES = {
  type: "FeatureCollection",
  features: ARCS.map((arc) => ({
    type: "Feature",
    properties: { id: arc.id },
    geometry: { type: "LineString", coordinates: arc.coordinates },
  })),
};
export const REGION_POINTS = {
  type: "FeatureCollection",
  features: REGIONS.map((region) => ({
    type: "Feature",
    properties: { id: region.id },
    geometry: { type: "Point", coordinates: region.center },
  })),
};
export function movingPoints(progress, selected) {
  return {
    type: "FeatureCollection",
    features: ARCS.map((arc, i) => ({
      type: "Feature",
      properties: { selected: arc.id === selected },
      geometry: {
        type: "Point",
        coordinates:
          arc.coordinates[
            Math.floor(
              ((progress + i * 0.17) % 1) * (arc.coordinates.length - 1),
            )
          ],
      },
    })),
  };
}
export function graticule() {
  const lines = [];
  for (let lon = -180; lon < 180; lon += 30)
    lines.push(Array.from({ length: 35 }, (_, i) => [lon, -85 + i * 5]));
  for (let lat = -60; lat <= 60; lat += 30)
    lines.push(Array.from({ length: 73 }, (_, i) => [-180 + i * 5, lat]));
  return {
    type: "FeatureCollection",
    features: lines.map((coordinates) => ({
      type: "Feature",
      properties: {},
      geometry: { type: "LineString", coordinates },
    })),
  };
}
