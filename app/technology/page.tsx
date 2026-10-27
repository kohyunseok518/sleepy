import type { Metadata } from "next";
import Link from "next/link";
import content from "@/content.json";
import ui from "../ui.module.css";
import { PageHero } from "@/components/PageHero";

const { technology: tech } = content;

export const metadata: Metadata = { title: `${tech.eyebrow} | ${content.site.name}` };

export default function TechnologyPage() {
  return (
    <>
      <PageHero eyebrow={tech.eyebrow} title={tech.title} subtitle={tech.subtitle} />

      <section className={ui.section}>
        <div className={ui.inner}>
          <h2 className={ui.h2}>{tech.principles.heading}</h2>
          <ol className={`${ui.grid} ${ui.grid3}`}>
            {tech.principles.items.map((p) => (
              <li key={p.step} className={ui.card}>
                <span className={ui.stepNoLight}>{p.step}</span>
                <h3 className={ui.cardTitle}>{p.title}</h3>
                <p className={ui.cardBody}>{p.body}</p>
              </li>
            ))}
          </ol>
          <p className={ui.note}>{tech.note}</p>
        </div>
      </section>

      <section className={`${ui.section} ${ui.sectionNight}`}>
        <div className={ui.inner}>
          <h2 className={ui.h2}>{tech.roadmap.heading}</h2>
          <ol className={`${ui.grid} ${ui.grid3}`}>
            {tech.roadmap.items.map((r, i) => (
              <li key={r.title} className={ui.card}>
                <span className={ui.stepNo}>단계 {i + 1}</span>
                <h3 className={ui.cardTitle}>{r.title}</h3>
                <p className={ui.cardBody}>{r.body}</p>
              </li>
            ))}
          </ol>
          <p className={ui.after}>
            <Link href="/product" className={ui.primary}>
              이 기술을 담은 제품 보기 →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
