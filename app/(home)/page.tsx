import Hero1 from "@/components/home/Hero1";
import MainNavbar from "@/components/home/MainNavbar";
import Navbar1 from "@/components/home/Navbar1";
import TextClipMaskEffect from "@/components/shared/TextClipMaskEffect";

export default function Home() {
  return (
    <main className="flex min-h-screen relative gap-[100px] flex-col bg-black">
      <Navbar1 />
      <Hero1 />
      <MainNavbar />
      <TextClipMaskEffect />
    </main>
  );
}
