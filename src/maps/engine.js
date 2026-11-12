import {
  Map,
  Marker,
  NavigationControl,
  setWorkerUrl,
  setWorkerCount,
} from "maplibre-gl";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import "maplibre-gl/dist/maplibre-gl.css";
setWorkerUrl(workerUrl);
setWorkerCount(2);
export { Map, Marker, NavigationControl };
