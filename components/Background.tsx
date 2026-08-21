type BackgroundProps = {
  type: "image" | "video";
  src: string;
  overlay?: number;
};

export default function Background({
  type,
  src,
  overlay = 0.3,
}: BackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {type === "image" ? (
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlay }}
      />
    </div>
  );
}