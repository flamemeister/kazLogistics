export default function Photo({
  name,
  alt = "",
  className = "",
  priority = false,
}) {
  return (
    <img
      className={className}
      src={`/media/${name}.webp`}
      srcSet={`/media/${name}-sm.webp 800w, /media/${name}.webp 1920w`}
      sizes="(max-width: 700px) 100vw, 100vw"
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      {...{ fetchpriority: priority ? "high" : "auto" }}
      decoding="async"
    />
  );
}
