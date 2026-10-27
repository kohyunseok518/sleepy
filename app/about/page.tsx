import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import content from "@/content.json";
import ui from "../ui.module.css";
import { PageHero } from "@/components/PageHero";

const { about } = content;

export const metadata: Metadata = { title: `${about.eyebrow} | ${content.site.name}` };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.title} subtitle={about.subtitle} />

      <section className={ui.section}>
        <div className={`${ui.inner} ${ui.split}`}>
          <Image
            className={ui.figure}
            src={about.image}
            alt={about.imageAlt}
            width={800}
            height={600}
            unoptimized
          />
          <div>
            <h2 className={ui.h2}>{about.story.heading}</h2>
            {about.story.paragraphs.map((p) => (
              <p key={p} className={ui.lead}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${ui.section} ${ui.sectionNight}`}>
        <div className={ui.inner}>
          <h2 className={ui.h2}>{about.values.heading}</h2>
          <ul className={`${ui.grid} ${ui.grid3}`}>
            {about.values.items.map((v) => (
              <li key={v.title} className={ui.card}>
                <h3 className={ui.cardTitle}>{v.title}</h3>
                <p className={ui.cardBody}>{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={ui.section}>
        <div className={ui.narrow}>
          <h2 className={ui.h2}>{about.timeline.heading}</h2>
          <ol className={ui.timeline}>
            {about.timeline.items.map((t) => (
              <li key={t.when + t.what}>
                <span className={ui.when}>{t.when}</span>
                <span className={ui.cardBody}>{t.what}</span>
              </li>
            ))}
          </ol>
          <p className={ui.after}>
            <Link href="/technology" className={`${ui.primary} ${ui.primaryOnLight}`}>
              우리 기술 알아보기 →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
