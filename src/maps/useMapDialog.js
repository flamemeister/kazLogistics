import { useEffect } from "react";

// A top-layer dialog works inside embedded browsers as well as regular tabs.
// The map canvas stays mounted, preserving its WebGL context and camera.
export default function useMapDialog(panel, resize, expanded) {
  useEffect(() => {
    if (!expanded) return;
    const node = panel.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    node.close();
    node.showModal();
    document.body.style.overflow = "hidden";
    node.querySelector(".map-expand-toggle")?.focus();
    const frame = requestAnimationFrame(resize);
    return () => {
      cancelAnimationFrame(frame);
      node.close();
      if (node.isConnected) node.show();
      document.body.style.overflow = overflow;
      resize();
      if (previous?.isConnected) previous.focus();
    };
  }, [panel, resize, expanded]);
}
