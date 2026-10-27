"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import content from "@/content.json";
import ui from "@/app/ui.module.css";
import { Icon } from "./Icon";

// 현재 주소를 알아야 지금 탭을 표시할 수 있어서 클라이언트 컴포넌트로 둔다.
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={ui.header}>
      <div className={ui.headerInner}>
        <Link href="/" className={ui.logo} aria-label={`${content.site.name} 메인으로`}>
          <Icon name="moon" className={ui.logoMark} />
          {content.site.name}
        </Link>
        <nav aria-label="주요 메뉴" className={ui.tabs}>
          {content.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${ui.tab} ${active ? ui.tabActive : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
