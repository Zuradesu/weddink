import Background from "@/components/Background";
import Opening from "@/components/Opening";
import WeddingIntro from "@/components/WeddingIntro";
import Quote from "@/components/Quote";
import Couple from "@/components/Couple";
import Event from "@/components/Event";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import Closing from "@/components/Closing";
import Wishes from "@/components/Wishes";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">

      {/* =========================
          GLOBAL VIDEO BACKGROUND
      ========================== */}

      <Background
        type="video"
        src="/videos/rawr.mp4"
        overlay={0.3}
      />

      {/* =========================
          SCROLLING CONTENT
      ========================== */}

      <div className="relative z-10">
        <Opening />

        <WeddingIntro />

        <Quote />

        <Couple />

        <Event />

        <Gallery />

        <Wishes />

        <Closing />

        <MusicPlayer />
      </div>

    </main>
  );
}