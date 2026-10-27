import Image from "next/image";
import styles from "./page.module.css";

// 원문을 아직 받지 못해 "[원문 대기]" 표시로 비워 둔다. 지어낸 문구를 넣지 않기 위해서다.
const PURCHASE_URL = ""; // 스마트스토어 상품 주소
const INQUIRY_URL = ""; // 외부 문의 폼 주소

const hero = {
  title: "[원문 대기] 제품 한 줄 설명",
  subtitle: "[원문 대기] 보조 설명",
};

const features = [
  { title: "[원문 대기] 특징 1", body: "[원문 대기] 특징 1 설명" },
  { title: "[원문 대기] 특징 2", body: "[원문 대기] 특징 2 설명" },
  { title: "[원문 대기] 특징 3", body: "[원문 대기] 특징 3 설명" },
];

const steps = [
  { title: "[원문 대기] 1단계", body: "[원문 대기] 1단계 설명" },
  { title: "[원문 대기] 2단계", body: "[원문 대기] 2단계 설명" },
  { title: "[원문 대기] 3단계", body: "[원문 대기] 3단계 설명" },
];

const faqs = [1, 2, 3, 4, 5].map((n) => ({
  question: `[원문 대기] 질문 ${n}`,
  answer: `[원문 대기] 답변 ${n}`,
}));

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
            슬리피
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
            src="/hero-placeholder.svg"
            alt="제품 대표 이미지"
            fill
            priority
            unoptimized
          />
          <div className={styles.heroText}>
            <h1>{hero.title}</h1>
            <p>{hero.subtitle}</p>
            <ExternalButton href={PURCHASE_URL} label="스마트스토어에서 구매" />
          </div>
        </section>

        <section id="product" className={styles.section}>
          <h2 className={styles.sectionTitle}>제품 특징</h2>
          <ul className={styles.cards}>
            {features.map((f, i) => (
              <li key={i} className={styles.card}>
                <Image
                  className={styles.cardImage}
                  src="/placeholder.svg"
                  alt={`${f.title} 이미지`}
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
          <h2 className={styles.sectionTitle}>사용 방법</h2>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
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
          <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <details key={i} className={styles.faq}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.sectionGray}`}>
          <h2 className={styles.sectionTitle}>문의</h2>
          <p className={styles.sectionSub}>[원문 대기] 문의 안내 문구</p>
          <div className={styles.center}>
            <ExternalButton href={INQUIRY_URL} label="문의하기" />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 슬리피</p>
      </footer>
    </>
  );
}
