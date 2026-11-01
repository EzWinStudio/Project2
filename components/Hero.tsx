"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { heroReel, projects } from "@/data/projects";
import { openProject } from "@/lib/open-project";

const wave = [
  38, 64, 26, 82, 54, 34, 74, 46, 22, 68, 40, 88, 30, 58, 44, 76, 28, 62, 36, 84, 48, 24, 70, 42,
  60, 32, 78, 50, 26, 66, 38, 56,
];

function LocalClock() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Istanbul",
      }).format(new Date());
    const write = () => {
      if (ref.current) ref.current.textContent = `TSİ ${format()}`;
    };
    write();
    const timer = window.setInterval(write, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return <span ref={ref}>TSİ --:--</span>;
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = heroReel[index];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % heroReel.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [paused]);

  const progress = useMemo(
    () => Math.round(((index + 1) / heroReel.length) * 100),
    [index],
  );

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="hero-kicker">EZ / Bağımsız geliştirici</p>

            <h1 className="hero-title" id="hero-title">
              <span className="l1">Kurarım.</span>
              <span className="l2">Keserim.</span>
              <span className="l3">
                Yayına alırım<i>.</i>
              </span>
            </h1>

            <p className="hero-sub">
              Discord botları, web panelleri, Roblox dünyaları, FiveM scriptleri, anime ve manga
              platformları, kısa form kurgu. <strong>Tek kişilik prodüksiyon:</strong> fikirden
              yayına, aynı masada.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#sistemler">
                Sistemleri gör
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => openProject("reel")}
              >
                Reel&apos;i aç
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            </div>

            <div className="hero-meta">
              <span className="live">
                <span className="status-dot" aria-hidden="true" />
                Yeni projelere açık
              </span>
              <span className="sep" aria-hidden="true" />
              <LocalClock />
              <span className="sep" aria-hidden="true" />
              <span>{String(projects.length).padStart(2, "0")} sistem / 01 operatör</span>
            </div>
          </div>

          <div
            className="viewer"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="viewer-chrome">
              <span className="filename">EZWIN_REEL_2026.MOV</span>
              <span className="rec">
                <span className="rec-dot" aria-hidden="true" />
                REC
              </span>
            </div>

            <button
              type="button"
              className="viewer-screen"
              onClick={() => openProject(active.id)}
              aria-label={`${active.title} projesini aç`}
            >
              {heroReel.map((project, slideIndex) => (
                <span
                  key={project.id}
                  className={`viewer-slide${slideIndex === index ? " is-active" : ""}`}
                  aria-hidden="true"
                >
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt=""
                      fill
                      sizes="(max-width: 1120px) 90vw, 520px"
                      className="viewer-logo"
                      priority={slideIndex === 0}
                    />
                  ) : (
                    <span className="viewer-fallback">{project.index}</span>
                  )}
                </span>
              ))}

              <span className="viewer-corner tl" aria-hidden="true" />
              <span className="viewer-corner tr" aria-hidden="true" />
              <span className="viewer-corner bl" aria-hidden="true" />
              <span className="viewer-corner br" aria-hidden="true" />

              <span className="viewer-cta" aria-hidden="true">
                ▸ oynat / {active.index}
              </span>

              <span className="viewer-info">
                <span>
                  <span className="active-title">{active.title}</span>
                  <span className="active-kicker">{active.categoryLabel}</span>
                </span>
                <span className="viewer-tc">{active.duration}</span>
              </span>
            </button>

            <div className="viewer-footer">
              <div className="wave" aria-hidden="true">
                {wave.map((height, barIndex) => (
                  <i
                    key={barIndex}
                    style={{
                      height: `${height}%`,
                      animationDelay: `${(barIndex % 8) * 0.09}s`,
                    }}
                  />
                ))}
              </div>
              <span className="pct">
                {active.index} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
            <div className="viewer-bar" aria-hidden="true">
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>

      <ReelBand />
    </section>
  );
}

function ReelBand() {
  return (
    <div className="reel-band" aria-label="Proje şeridi">
      <div className="reel-track">
        {[0, 1].map((group) => (
          <div
            className="reel-group"
            key={group}
            aria-hidden={group === 1 ? "true" : undefined}
          >
            {projects.map((project) => (
              <button
                key={`${group}-${project.id}`}
                type="button"
                className="reel-frame"
                style={{ "--accent": project.accent } as CSSProperties}
                onClick={() => openProject(project.id)}
                tabIndex={group === 1 ? -1 : 0}
                aria-hidden={group === 1 ? "true" : undefined}
              >
                <span className="frame-top">
                  <span>{project.index}</span>
                  <span>{project.status}</span>
                </span>
                <span className="frames-img">
                  {project.logo ? (
                    <Image src={project.logo} alt="" fill sizes="180px" />
                  ) : (
                    <span className="frame-fallback" aria-hidden="true">
                      {project.index}
                    </span>
                  )}
                </span>
                <span className="frame-bottom">
                  <strong>{project.title}</strong>
                  <span>{project.duration}</span>
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>
      <span className="reel-hint">Tıkla / aç</span>
    </div>
  );
}
