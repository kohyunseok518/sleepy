import Image from "next/image";
import Link from "next/link";
import content from "@/content.json";
import ui from "./ui.module.css";
import { ActionButton } from "@/components/ActionButton";
import { Icon } from "@/components/Icon";

const { home } = content;

// 메인: 3초 안에 "무엇인지(제목)"와 "무엇을 누르면 되는지(구매 버튼 하나)"가 보이게 한다.
export default function Home() {
  return (
    <>
      <section className={ui.hero}>
        <Image
          className={ui.heroBg}
          src="/illust/night-sky.svg"
          alt=""
          fill
          priority
          unoptimized
        />
        <div className={ui.heroInner}>
          <span className={ui.eyebrow}>{home.eyebrow}</span>
          <h1 className={ui.heroTitle}>{home.title}</h1>
          <p className={ui.heroSub}>{home.subtitle}</p>
          <ActionButton kind="purchase" />
          <p className={ui.trust}>{home.trust}</p>
        </div>
      </section>

      <section className={ui.section}>
        <ul className={`${ui.inner} ${ui.grid} ${ui.grid3}`}>
          {home.points.map((p) => (
            <li key={p.title} className={ui.card}>
              <span className={ui.icon}>
                <Icon name={p.icon} />
              </span>
              <h2 className={ui.cardTitle}>{p.title}</h2>
              <p className={ui.cardBody}>{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${ui.section} ${ui.sectionTight}`}>
        <div className={ui.inner}>
          <h2 className={ui.h2}>{home.explore.heading}</h2>
          <ul className={`${ui.grid} ${ui.grid3}`}>
            {home.explore.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={ui.linkCard}>
                  <h3 className={ui.cardTitle}>{item.title}</h3>
                  <p className={ui.cardBody}>{item.body}</p>
                  <span className={ui.linkCta}>{item.cta} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={ui.closing}>
        <h2 className={ui.h2}>{home.closing.title}</h2>
        <p className={ui.lead}>{home.closing.body}</p>
        {/* 마지막에도 같은 행동 하나만 다시 권한다. */}
        <ActionButton kind="purchase" />
        <div className={ui.waveBg} aria-hidden="true" />
      </section>
    </>
  );
}
