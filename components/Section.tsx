import Background from "./Background";

type SectionProps = {
  id?: string;

  children: React.ReactNode;

  background: {
    type: "image" | "video";
    src: string;
  };

  overlay?: number;

  className?: string;
};

export default function Section({
  id,
  children,
  background,
  overlay = 0.3,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden ${className}`}
    >
      <Background
        type={background.type}
        src={background.src}
        overlay={overlay}
      />

      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}