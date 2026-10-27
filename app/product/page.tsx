import type { Metadata } from "next";
import Image from "next/image";
import content from "@/content.json";
import ui from "../ui.module.css";
import { PageHero } from "@/components/PageHero";
import { ActionButton } from "@/components/ActionButton";
import { Icon } from "@/components/Icon";

const { product } = content;

export const metadata: Metadata = { title: `${product.eyebrow} | ${content.site.name}` };

// 제품 페이지의 주 행동은 구매 하나. 맨 위와 맨 아래에 같은 버튼만 둔다.
export default function ProductPage() {
  return (
    <>
      <PageHero eyebrow={product.eyebrow} title={product.title} subtitle={product.subtitle}>
        <ActionButton kind="purchase" />
      </PageHero>

      <section className={ui.section}>
        <div className={`${ui.inner} ${ui.split}`}>
          <Image
            className={ui.figure}
            src={product.image}
            alt={product.imageAlt}
            width={1200}
            height={900}
            unoptimized
          />
          <div>
            <h2 className={ui.h2}>{product.features.heading}</h2>
            <ul className={ui.grid}>
              {product.features.items.map((f) => (
                <li key={f.title} className={ui.card}>
                  <span className={ui.icon}>
                    <Icon name={f.icon} />
                  </span>
                  <h3 className={ui.cardTitle}>{f.title}</h3>
                  <p className={ui.cardBody}>{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${ui.section} ${ui.sectionTight}`}>
        <div className={ui.inner}>
          <h2 className={ui.h2}>{product.steps.heading}</h2>
          <ol className={`${ui.grid} ${ui.grid3}`}>
            {product.steps.items.map((s, i) => (
              <li key={s.title} className={ui.card}>
                <span className={ui.stepNoLight}>{i + 1}</span>
                <h3 className={ui.cardTitle}>{s.title}</h3>
                <p className={ui.cardBody}>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${ui.section} ${ui.sectionNight}`}>
        <div className={ui.narrow}>
          <h2 className={ui.h2}>{product.faq.heading}</h2>
          {product.faq.items.length === 0 ? (
            <p className={ui.empty}>{product.faq.empty}</p>
          ) : (
            <div className={ui.faqList}>
              {product.faq.items.map((f) => (
                <details key={f.question} className={ui.faq}>
                  <summary>{f.question}</summary>
                  <p>{f.answer}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={ui.closing}>
        <h2 className={ui.h2}>{content.home.closing.title}</h2>
        <p className={ui.lead}>{content.home.closing.body}</p>
        <ActionButton kind="purchase" />
        <div className={ui.waveBg} aria-hidden="true" />
      </section>
    </>
  );
}
