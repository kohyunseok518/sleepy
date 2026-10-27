import Link from "next/link";
import content from "@/content.json";
import ui from "@/app/ui.module.css";

export function SiteFooter() {
  return (
    <footer className={ui.footer}>
      <div className={ui.footerInner}>
        <p>{content.site.copyright}</p>
        <nav aria-label="하단 메뉴" className={ui.footerLinks}>
          {content.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
