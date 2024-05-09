import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <Hero />

      <FeaturedProjects />
      <RecentProjects />
    </main>
  );
}
