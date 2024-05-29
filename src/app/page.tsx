import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <FeaturedProjects />
      <RecentProjects />
    </main>
  );
}
