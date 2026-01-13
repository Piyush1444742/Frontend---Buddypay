import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import InfoSection from "../components/InfoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070B1E] text-white overflow-hidden">
      <Navbar />
      <HomeHero />
      <InfoSection />
    </div>
  );
}
