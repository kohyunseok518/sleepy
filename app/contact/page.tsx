import type { Metadata } from "next";
import content from "@/content.json";
import ui from "../ui.module.css";
import { PageHero } from "@/components/PageHero";
import { ActionButton } from "@/components/ActionButton";

const { contact } = content;

export const metadata: Metadata = { title: `${contact.eyebrow} | ${content.site.name}` };

// 문의 페이지의 주 행동은 "문의 남기기" 하나. 입력은 외부 폼에서 받아 여기서는 묻지 않는다.
export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.subtitle}>
        <ActionButton kind="inquiry" />
      </PageHero>

      <section className={ui.section}>
        <div className={ui.inner}>
          <h2 className={ui.h2}>{contact.topics.heading}</h2>
          <ul className={`${ui.grid} ${ui.grid3}`}>
            {contact.topics.items.map((t) => (
              <li key={t.title} className={ui.card}>
                <h3 className={ui.cardTitle}>{t.title}</h3>
                <p className={ui.cardBody}>{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
