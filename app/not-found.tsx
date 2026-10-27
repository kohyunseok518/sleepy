import Link from "next/link";
import content from "@/content.json";
import ui from "./ui.module.css";

// 잘못된 주소로 왔을 때도 화면이 무슨 일인지, 어디로 가면 되는지 말해 준다.
export default function NotFound() {
  const { notFound } = content;
  return (
    <section className={ui.closing}>
      <h1 className={ui.h2}>{notFound.title}</h1>
      <p className={ui.lead}>{notFound.body}</p>
      <Link href="/" className={ui.primary}>
        {notFound.cta}
      </Link>
      <div className={ui.waveBg} aria-hidden="true" />
    </section>
  );
}
