const paths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  northeast: "M6 18 18 6M6 6h12v12",
  chevron: "m6 9 6 6 6-6",
  close: "m6 6 12 12M6 18 18 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  expand: "M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5",
  phone:
    "M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-5-2-2 2a12 12 0 0 1-6-6l2-2-2-5Z",
  mail: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
  pin: "M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0ZM9 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0",
  globe:
    "M3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18ZM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0",
  truck:
    "M3 6h11v11H3V6Zm11 4h4l3 4v3h-7M6 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
  air: "m21 3-7 18-3-8-8-3L21 3Zm0 0L11 13",
  rail: "M6 3h12v14H6V3Zm0 7h12M9 17l-3 4m9-4 3 4M9 14h.01M15 14h.01",
  box: "m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4M12 11v10M8 5l9 4v5",
  check: "m5 12 4 4L19 6",
  chat: "M4 4h16v12H9l-5 4V4Zm4 5h8M8 12h5",
  refresh: "M20 8a8 8 0 1 0 0 8M20 3v5h-5",
  shield: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6",
};
export default function Icon({ name = "arrow", size = 24, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
