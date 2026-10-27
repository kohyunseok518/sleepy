import content from "@/content.json";
import ui from "@/app/ui.module.css";

type Props = {
  kind: "purchase" | "inquiry";
  // 밝은 배경 위에서는 진한 버튼을 써야 보인다.
  onLight?: boolean;
};

/**
 * 외부로 나가는 주 버튼(구매·문의). 주소가 비어 있으면 깨진 링크 대신
 * 비활성 버튼과 안내 문구를 보여 준다(빈 상태도 화면이 말을 하게).
 */
export function ActionButton({ kind, onLight = false }: Props) {
  const href = content.links[kind];
  const label = content.buttons[kind];
  const pending = content.buttons[kind === "purchase" ? "purchasePending" : "inquiryPending"];
  const className = `${ui.primary} ${onLight ? ui.primaryOnLight : ""}`;

  if (!href) {
    return (
      <div>
        <span className={`${className} ${ui.disabled}`} aria-disabled="true">
          {label}
        </span>
        <p className={ui.pending}>{pending}</p>
      </div>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {label}
      <span aria-hidden="true">↗</span>
      <span className="sr-only">(새 창)</span>
    </a>
  );
}
