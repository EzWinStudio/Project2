"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { DISCORD_INVITE, projects } from "@/data/projects";

export default function ProjectDialogHost() {
  const [id, setId] = useState<string | null>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  const closeDialog = useCallback(() => setId(null), []);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (projects.some((project) => project.id === detail)) {
        restoreRef.current = document.activeElement as HTMLElement;
        setId(detail);
      }
    };
    window.addEventListener("ezwin:open-project", handler);
    return () => window.removeEventListener("ezwin:open-project", handler);
  }, []);

  useEffect(() => {
    if (!id) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => closeRef.current?.focus(), 0);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
        return;
      }
      if (event.key !== "Tab") return;
      const sheet = sheetRef.current;
      if (!sheet) return;
      const nodes = Array.from(
        sheet.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((node) => node.offsetParent !== null);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      restoreRef.current?.focus?.();
    };
  }, [id, closeDialog]);

  const project = projects.find((item) => item.id === id);
  if (!project) return null;

  return createPortal(
    <div
      className="sheet-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
    >
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        ref={sheetRef}
        style={{ "--accent": project.accent } as CSSProperties}
      >
        <button
          type="button"
          className="sheet-close"
          onClick={closeDialog}
          aria-label="Detayı kapat"
          ref={closeRef}
        >
          ✕
        </button>

        <div className="sheet-art">
          <div className="sheet-meta">
            <span>
              {project.index} / {String(projects.length).padStart(2, "0")}
            </span>
            <span>{project.status}</span>
          </div>
          <div className="sheet-logo">
            {project.logo ? (
              <Image
                src={project.logo}
                alt={`${project.title} logosu`}
                fill
                sizes="(max-width: 860px) 88vw, 380px"
              />
            ) : (
              <span className="sheet-fallback" aria-hidden="true">
                {project.title}
              </span>
            )}
          </div>
          <div className="sheet-meta">
            <span>{project.categoryLabel}</span>
            <span>{project.duration}</span>
          </div>
        </div>

        <div className="sheet-body">
          <div className="sheet-kicker">
            <span>{project.kicker}</span>
            <span className="badge">{project.status}</span>
          </div>
          <h2 className="sheet-title" id="sheet-title">
            {project.title}
          </h2>
          <p className="sheet-tagline">{project.tagline}</p>

          <div className="sheet-stats">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <p className="sheet-desc">{project.description}</p>

          <p className="sheet-sub">Mekanizma</p>
          <ul className="sheet-features">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="sheet-stack">
            {project.stack.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="sheet-foot">
            <span className="hint">Esc veya dışarı tıkla · kapat</span>
            <a className="link" href={DISCORD_INVITE} target="_blank" rel="noreferrer noopener">
              Benzerini konuş →
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
