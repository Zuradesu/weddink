import Background from "@/components/Background";
import Opening from "@/components/Opening";
import WeddingIntro from "@/components/WeddingIntro";
import Quote from "@/components/Quote";
import Couple from "@/components/Couple";
import Event from "@/components/Event";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
return ( <main className="relative min-h-screen w-full overflow-x-hidden">

```
  {/* =========================
      GLOBAL VIDEO BACKGROUND
  ========================== */}

  <Background />

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

    <MusicPlayer />
  </div>

</main>
)};
