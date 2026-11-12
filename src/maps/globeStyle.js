import { ROUTES, REGION_POINTS, graticule, movingPoints } from "./geography.js";
export function globeStyle() {
  return {
    version: 8,
    projection: { type: "globe" },
    sky: {
      "sky-color": "#071f19",
      "horizon-color": "#568467",
      "fog-color": "#071f19",
      "sky-horizon-blend": 0.8,
      "horizon-fog-blend": 0.3,
      "atmosphere-blend": 0.55,
    },
    sources: {
      world: {
        type: "geojson",
        data: "/maps/world.geojson",
        attribution:
          '<a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener">Natural Earth</a>',
      },
      grid: { type: "geojson", data: graticule() },
      routes: { type: "geojson", data: ROUTES },
      regions: { type: "geojson", data: REGION_POINTS },
      flow: { type: "geojson", data: movingPoints(0.15, "china") },
    },
    layers: [
      {
        id: "ocean",
        type: "background",
        paint: { "background-color": "#092b24" },
      },
      {
        id: "land",
        type: "fill",
        source: "world",
        paint: {
          "fill-color": [
            "case",
            ["==", ["get", "iso"], "KAZ"],
            "#75965c",
            "#1d503c",
          ],
          "fill-opacity": 0.98,
        },
      },
      {
        id: "country-outlines",
        type: "line",
        source: "world",
        paint: {
          "line-color": "#629073",
          "line-width": 0.65,
          "line-opacity": 0.45,
        },
      },
      {
        id: "grid",
        type: "line",
        source: "grid",
        paint: {
          "line-color": "#a7c2ac",
          "line-width": 0.6,
          "line-opacity": 0.12,
        },
      },
      {
        id: "route-glow",
        type: "line",
        source: "routes",
        paint: {
          "line-color": "#cceaa1",
          "line-width": 7,
          "line-opacity": 0.08,
          "line-blur": 3,
        },
      },
      {
        id: "route-lines",
        type: "line",
        source: "routes",
        paint: {
          "line-color": "#cceaa1",
          "line-width": 1.3,
          "line-opacity": 0.5,
        },
      },
      {
        id: "route-active",
        type: "line",
        source: "routes",
        filter: ["==", "id", "china"],
        paint: {
          "line-color": "#e2ffc3",
          "line-width": 2.2,
          "line-opacity": 0.95,
        },
      },
      {
        id: "region-halos",
        type: "circle",
        source: "regions",
        paint: {
          "circle-radius": 10,
          "circle-color": "#cceaa1",
          "circle-opacity": 0.12,
        },
      },
      {
        id: "region-points",
        type: "circle",
        source: "regions",
        paint: {
          "circle-radius": 3.5,
          "circle-color": "#d9edbb",
          "circle-stroke-color": "#7da87a",
          "circle-stroke-width": 1,
        },
      },
      {
        id: "flow-glow",
        type: "circle",
        source: "flow",
        paint: {
          "circle-radius": ["case", ["get", "selected"], 8, 5],
          "circle-color": "#d5f3ab",
          "circle-blur": 0.7,
          "circle-opacity": 0.5,
        },
      },
      {
        id: "flow-dots",
        type: "circle",
        source: "flow",
        paint: {
          "circle-radius": ["case", ["get", "selected"], 3, 1.7],
          "circle-color": "#f6ffe8",
          "circle-opacity": 0.95,
        },
      },
    ],
  };
}
