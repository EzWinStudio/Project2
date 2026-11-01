"use client";

import { useEffect, useRef, useState } from "react";
import { DISCORD_INVITE } from "@/data/projects";

const nav = [
  { id: "top", index: "01", label: "Reel" },
  { id: "sistemler", index: "02", label: "Sistemler" },
  { id: "sirketler", index: "03", label: "Şirketler" },
  { id: "yetenekler", index: "04", label: "Yetenekler" },
  { id: "surec", index: "05", label: "Süreç" },
  { id: "iletisim", index: "06", label: "İletişim" },
];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const fillRef = useRef<HTMLDivElement>(null);
  const tcRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const progress = max > 0 ? (doc.scrollTop / max) * 100 : 0;
        if (fillRef.current) fillRef.current.style.width = `${progress}%`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      if (!tcRef.current) return;
      const now = new Date();
      const frames = Math.floor(now.getMilliseconds() / 40);
      tcRef.current.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
        now.getSeconds(),
      )}:${pad(frames)}`;
    };
    tick();
    const timer = window.setInterval(tick, 80);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="progress-rail" aria-hidden="true">
        <div className="progress-fill" ref={fillRef} />
      </div>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="EzWin — başa dön">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-word">
              <span className="b-ez">EZ</span>
              <span className="b-win">WIN</span>
            </span>
          </a>

          <nav className="main-nav" aria-label="Ana menü">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-right">
            <span className="timecode" aria-label="Yerel zaman kodu">
              TC <b ref={tcRef}>--:--:--:--</b>
            </span>
            <a
              className="header-cta"
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="dot" aria-hidden="true" />
              <span className="label">Discord</span>
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "KAPAT" : "MENÜ"}
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-menu" id="mobile-menu" hidden={!open}>
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            {item.label}
            <span>{item.index}</span>
          </a>
        ))}
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => setOpen(false)}
        >
          Discord
          <span>↗</span>
        </a>
      </div>
    </>
  );
}
