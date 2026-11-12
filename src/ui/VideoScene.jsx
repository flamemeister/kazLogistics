import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useSceneActivity from "../experience/useSceneActivity";
import { experienceCopy } from "../experience/copy";
import "../styles/video-scene.css";

export default function VideoScene({ asset, className = "" }) {
  const scene = useRef(null);
  const video = useRef(null);
  const { i18n } = useTranslation();
  const copy = experienceCopy[i18n.resolvedLanguage] || experienceCopy.kk;
  const { active, reduced, compact, saveData } = useSceneActivity(scene);
  const [paused, setPaused] = useState(false);
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
    if (active && allowed && !paused && !failed) {
      element.play().catch(() => {
        if (!cancelled) setPaused(true);
      });
    } else element.pause();
    return () => {
      cancelled = true;
      element.pause();
    };
  }, [active, allowed, paused, source, failed]);
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
              : paused || !active
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
      {allowed && !failed && (
        <button
          className="video-motion-toggle"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? copy.play : copy.pause}
          aria-pressed={paused}
          title={paused ? copy.play : copy.pause}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            {paused ? (
              <path d="m5 3 8 5-8 5V3Z" />
            ) : (
              <path d="M4 3h3v10H4V3Zm5 0h3v10H9V3Z" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
}
