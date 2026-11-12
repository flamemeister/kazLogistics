import VideoScene from "./VideoScene";
import "../styles/hero-scene.css";
const ship = {
  desktop: "/media/video/hero-ship.mp4",
  mobile: "/media/video/hero-ship-mobile.mp4",
  poster: "/media/video/hero-ship-poster.webp",
};
export default function HeroScene() {
  return <VideoScene asset={ship} className="hero-scene" />;
}
