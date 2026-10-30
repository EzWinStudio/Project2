"use client";

import Image from "next/image";
import { useState, type CSSProperties, type PointerEvent } from "react";
import { categories, projects, type Category } from "@/data/projects";
import { openProject } from "@/lib/open-project";

type Filter = "all" | Category;

export default function ProjectWall() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  const handleMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 4}deg) rotateY(${
      (x - 0.5) * 5
    }deg) translateY(-4px)`;
  };

  const handleLeave = (event: PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <section className="section band-violet" id="sistemler" aria-labelledby="sistemler-title">
      <div className="wrap">
        <div className="sec-head reveal" data-reveal>
          <div>
            <span className="sec-index">02 / Sistemler</span>
            <h2 className="sec-title" id="sistemler-title">
              Seçili <em>işler</em>
            </h2>
          </div>
          <p className="sec-note">
            Her kart gerçek bir depodan: botlar, paneller, sunucular ve kurgu. Detay için karta
            dokun.
          </p>
        </div>

        <div className="toolbar reveal" data-reveal style={{ "--d": "60ms" } as CSSProperties}>
          <div className="filters" role="group" aria-label="Proje kategorileri">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className="chip"
                aria-pressed={filter === category.id}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <span className="count" aria-live="polite">
            <b>{String(visible.length).padStart(2, "0")}</b> / {String(projects.length).padStart(2, "0")} proje
          </span>
        </div>

        <div className="systems-grid reveal" data-reveal style={{ "--d": "110ms" } as CSSProperties}>
          {visible.map((project) => (
            <button
              key={project.id}
              type="button"
              className={`card span-${project.span}`}
              style={{ "--accent": project.accent } as CSSProperties}
              onClick={() => openProject(project.id)}
              onPointerMove={handleMove}
              onPointerLeave={handleLeave}
              aria-label={`${project.title} — ${project.categoryLabel}. Detayı aç.`}
            >
              <span className="card-top">
                <span className="num">{project.index}</span>
                <span>{project.categoryLabel}</span>
                <span className="badge">
                  <span className="badge-dot" aria-hidden="true" />
                  {project.status}
                </span>
              </span>

              <span className="card-art">
                {project.art === "logo" && project.logo ? (
                  <Image
                    src={project.logo}
                    alt=""
                    fill
                    sizes="(max-width: 860px) 90vw, (max-width: 1120px) 45vw, 460px"
                    className="art-logo"
                  />
                ) : null}

                {project.art === "reel" ? (
                  <span className="mini-timeline" aria-hidden="true">
                    <span className="track">
                      <span className="clip" style={{ flex: 3 }} />
                      <span className="clip" style={{ flex: 1.4 }} />
                      <span className="clip" style={{ flex: 2.2 }} />
                      <span className="clip" style={{ flex: 0.9 }} />
                      <span className="clip" style={{ flex: 2.6 }} />
                      <span className="clip" style={{ flex: 1.8 }} />
                    </span>
                    <span className="track" style={{ opacity: 0.55 }}>
                      <span className="clip" style={{ flex: 1.6 }} />
                      <span className="clip" style={{ flex: 2.4 }} />
                      <span className="clip" style={{ flex: 3.4 }} />
                      <span className="clip" style={{ flex: 1.1 }} />
                    </span>
                    <span className="ticks">
                      <span>00:00</span>
                      <span>00:14</span>
                      <span>00:28</span>
                      <span>00:42</span>
                    </span>
                    <span className="playhead" />
                  </span>
                ) : null}

                {project.art === "platform" ? (
                  <span className="platform-art" aria-hidden="true">
                    <span>WIN</span>
                    <span>WEB</span>
                    <span>AND</span>
                    <span>iOS</span>
                    <span>XBOX</span>
                    <span>PS</span>
                    <span className="on">VR</span>
                    <span>+1</span>
                  </span>
                ) : null}
              </span>

              <span className="card-content">
                <span className="card-kicker">{project.kicker}</span>
                <span className="card-title">{project.title}</span>
                <span className="card-tag">{project.tagline}</span>
              </span>

              <span className="card-bottom">
                <span className="tags">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </span>
                <span className="card-open" aria-hidden="true">
                  ↗
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
