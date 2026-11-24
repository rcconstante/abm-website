import Image from "next/image";

export function SchoolLogo({
  variant = "light",
  size = 46,
}: {
  variant?: "light" | "dark";
  size?: number;
}) {
  const isDark = variant === "dark";

  return (
    <span
      className={`school-logo-wrap ${isDark ? "school-logo-dark" : ""}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/Ourladyoflourdes/logo.webp"
        alt="Our Lady of Lourdes College Foundation official seal"
        width={size}
        height={size}
        className="school-logo-img"
        priority={!isDark}
        decoding="async"
      />
    </span>
  );
}
