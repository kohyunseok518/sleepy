import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "슬리피",
  description: "슬리피 브랜드 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 한글 본문 글꼴. 버전을 고정해 배포 후 글꼴이 바뀌지 않게 한다. */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
