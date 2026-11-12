import { useEffect, useRef, useState } from "react";
import useSceneActivity from "../experience/useSceneActivity";
import "../styles/video-scene.css";

export default function VideoScene({ asset, className = "" }) {
  const scene = useRef(null);
  const video = useRef(null);
  const { active, reduced, compact, saveData } = useSceneActivity(scene);
  const [ready, setReady] = useState(false);
  const [source, setSource] = useState(null);
  const [failed, setFailed] = useState(false);
  const allowed = !reduced && !saveData;
  useEffect(() => {
    if (!active || !allowed || source || failed) return;
    const timer = setTimeout(
      () => setSource(compact ? asset.mobile : asset.desktop),
      500,
    );
    return () => clearTimeout(timer);
  }, [active, allowed, compact, source, failed, asset]);
  useEffect(() => {
    const element = video.current;
    if (!element || !source) return;
    let cancelled = false;
    if (active && allowed && !failed) {
      element.play().catch(() => {
        if (!cancelled) setFailed(true);
      });
    } else element.pause();
    return () => {
      cancelled = true;
      element.pause();
    };
  }, [active, allowed, source, failed]);
  return (
    <div
      className={`video-scene ${className}`}
      ref={scene}
      data-video-ready={ready && !failed}
      data-video-state={
        failed
          ? "failed"
          : !allowed
            ? "static"
            : !ready
              ? "loading"
              : !active
                ? "paused"
                : "playing"
      }
    >
      <img
        className="video-poster"
        src={asset.poster}
        alt=""
        width="1280"
        height="720"
        {...{ fetchpriority: "high" }}
      />
      {source && (
        <video
          ref={video}
          className="video-footage"
          src={source}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onLoadedData={() => setReady(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
