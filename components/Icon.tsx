// 아이콘은 외부 라이브러리 없이 직접 그린 선 아이콘만 쓴다. 색은 글자색(currentColor)을 따른다.
const paths: Record<string, React.ReactNode> = {
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />,
  phoneOff: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
      <path d="M3 3l18 18" />
    </>
  ),
  feather: (
    <>
      <path d="M20 4c-6 0-12 4-13 13l-3 3" />
      <path d="M7 17c5 0 9-3 10-8" />
      <path d="M11 13h5" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3" />
      <path d="M7 15h10" />
    </>
  ),
};

export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}
