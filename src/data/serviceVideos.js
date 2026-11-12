const scene = (slug) => ({
  desktop: `/media/services/${slug}.mp4`,
  mobile: `/media/services/${slug}-mobile.mp4`,
  poster: `/media/services/${slug}-poster.webp`,
});

export const serviceVideos = {
  auto: scene("auto"),
  air: scene("air"),
  railway: scene("railway"),
  container: scene("container"),
  multimodal: {
    desktop: "/media/video/hero-ship.mp4",
    mobile: "/media/video/hero-ship-mobile.mp4",
    poster: "/media/video/hero-ship-poster.webp",
  },
  oversized: scene("oversized"),
  containerdepot: scene("containerdepot"),
};
