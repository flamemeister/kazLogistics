export function flightRoute(width, height) {
  const compact = width < 700;
  const point = (x, y) => ({
    x: Math.round(width * x),
    y: Math.round(height * y),
  });
  const a = point(compact ? 0.16 : 0.12, compact ? 0.77 : 0.7);
  const b = point(compact ? 0.83 : 0.87, compact ? 0.22 : 0.3);
  const c = compact
    ? [point(0.18, 0.3), point(0.72, 0.65)]
    : [point(0.32, 0.1), point(0.64, 0.05)];
  return {
    a,
    b,
    path: `M ${a.x} ${a.y} C ${c[0].x} ${c[0].y}, ${c[1].x} ${c[1].y}, ${b.x} ${b.y}`,
  };
}
