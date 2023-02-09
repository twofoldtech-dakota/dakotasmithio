import Hero from "@/components/hero";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <main className="relative mt-[103px] h-screenHeightWithoutHeader">
      <div className="w-full">
        <Hero />
        <Stats />
      </div>
    </main>
  );
}
