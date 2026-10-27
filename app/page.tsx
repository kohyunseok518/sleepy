import Image from "next/image";
import content from "@/content.json";
import styles from "./page.module.css";

// 화면 글·링크·이미지는 모두 content.json에서 읽는다. 담당자가 코드를 몰라도 그 파일만 고치면 된다.
const { links, hero, features, steps, faq, contact, footer, site } = content;

function ExternalButton({ href, label }: { href: string; label: string }) {
  // 주소가 비어 있으면 깨진 링크 대신 비활성 버튼을 보여 준다.
  if (!href) {
    return (
      <span className={`${styles.button} ${styles.buttonDisabled}`} aria-disabled="true">
        {label} (링크 준비 중)
      </span>
    );
  }
  return (
    <a className={styles.button} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.logo}>
            {site.name}
          </a>
          <nav aria-label="주요 메뉴">
            <ul className={styles.nav}>
              <li><a href="#product">제품</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">문의</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <Image
            className={styles.heroImage}
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            unoptimized
          />
          <div className={styles.heroText}>
            <h1>{hero.title}</h1>
            <p>{hero.subtitle}</p>
            <ExternalButton href={links.purchase} label={hero.buttonLabel} />
          </div>
        </section>

        <section id="product" className={styles.section}>
          <h2 className={styles.sectionTitle}>{features.heading}</h2>
          <ul className={styles.cards}>
            {features.items.map((f, i) => (
              <li key={i} className={styles.card}>
                <Image
                  className={styles.cardImage}
                  src={f.image}
                  alt={f.imageAlt}
                  width={640}
                  height={480}
                  unoptimized
                />
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <h2 className={styles.sectionTitle}>{steps.heading}</h2>
          <ol className={styles.steps}>
            {steps.items.map((s, i) => (
              <li key={i} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="faq" className={styles.section}>
          <h2 className={styles.sectionTitle}>{faq.heading}</h2>
          <div className={styles.faqList}>
            {faq.items.map((f, i) => (
              <details key={i} className={styles.faq}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.sectionGray}`}>
          <h2 className={styles.sectionTitle}>{contact.heading}</h2>
          <p className={styles.sectionSub}>{contact.description}</p>
          <div className={styles.center}>
            <ExternalButton href={links.inquiry} label={contact.buttonLabel} />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>{footer.copyright}</p>
      </footer>
    </>
  );
}
