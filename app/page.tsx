import Opening from "@/components/Opening";
import Quote from "@/components/Quote";
import WeddingIntro from "@/components/WeddingIntro";
import Couple from "@/components/Couple";
import Event from "@/components/Event";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      <Opening />

      <WeddingIntro />
      <Quote />
      <Couple />
      <Event /> 
    </main>
  );
}