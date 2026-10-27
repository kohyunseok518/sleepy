import ui from "@/app/ui.module.css";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

// 메인 외 페이지의 맨 위. 페이지마다 같은 모양이어야 탭을 옮겨도 어디에 있는지 바로 알 수 있다.
export function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className={ui.pageHero}>
      <div className={ui.pageHeroInner}>
        <span className={ui.eyebrow}>{eyebrow}</span>
        <h1 className={ui.heroTitle}>{title}</h1>
        <p className={ui.heroSub}>{subtitle}</p>
        {children}
      </div>
      <div className={ui.waveBg} aria-hidden="true" />
    </section>
  );
}
