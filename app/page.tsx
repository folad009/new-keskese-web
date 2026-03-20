import Clients from "../components/Clients";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import HowWeRoll from "../components/HowWeRoll";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <HowWeRoll />
      <Clients />
    </>
  );
}
