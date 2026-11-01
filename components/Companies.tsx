import Image from "next/image";
import type { CSSProperties } from "react";
import { companies } from "@/data/companies";

export default function Companies() {
  return (
    <section className="section band-mint" id="sirketler" aria-labelledby="sirketler-title">
      <div className="wrap">
        <div className="sec-head reveal" data-reveal>
          <div>
            <span className="sec-index">03 / Şirketler</span>
            <h2 className="sec-title" id="sirketler-title">
              Şirket <em>ağı</em>
            </h2>
          </div>
          <p className="sec-note">
            Yedi marka, tek çatı. Her biri kendi sitesi ve kimliğiyle yayında.
          </p>
        </div>

        <div className="company-list reveal" data-reveal style={{ "--d": "60ms" } as CSSProperties}>
          {companies.map((company) => (
            <a
              className="company-row"
              key={company.id}
              href={company.url}
              target="_blank"
              rel="noreferrer noopener"
              style={{ "--accent": company.accent } as CSSProperties}
            >
              <span className="company-index">{company.index}</span>
              <span className="company-logo">
                <Image
                  src={company.logo}
                  alt={`${company.name} logosu`}
                  width={64}
                  height={64}
                  sizes="64px"
                />
              </span>
              <span className="company-copy">
                <b>{company.name}</b>
                <span>{company.description}</span>
              </span>
              <span className="company-meta">
                <span className="company-cat">{company.category}</span>
                <span className="company-url">{company.url.replace("https://", "")}</span>
              </span>
              <span className="company-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
