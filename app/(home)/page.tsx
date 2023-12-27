import Hero1 from "@/components/home/Hero1";
import MainNavbar from "@/components/home/MainNavbar";
import Navbar1 from "@/components/home/Navbar1";

export default function Home() {
  return (
    <main className="flex min-h-screen relative gap-[100px] flex-col bg-black">
      <Navbar1 />
      <Hero1 />
      <MainNavbar />
      {/* <div
        className="bg-gemini-style-gradient"
        style={{
          position: "absolute",
          width: "80%",
          height: "50%",
          left: "50%", // Center horizontally
          top: "50%", // Center vertically
          transform: "translate(-50%, -50%) matrix(1, 0, -0.03, 1, 0, 0)", // Adjust for precise positioning
          opacity: 0.5,
          filter: "blur(74px)",
          borderRadius: "50%",
          zIndex: "0", // Ensure it's behind the text
        }}
      ></div> */}
    </main>
  );
}
