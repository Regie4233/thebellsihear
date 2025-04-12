import PodcastHero from "@/components/Landing/PodcastHero";
import PodcastHeading from "@/components/Landing/PodcastHeading";
import PodcastIntro from "@/components/Landing/PodcastIntro";
import PodcastEpisodeList from "@/components/Episodes/PodcastEpisodeList";
import PodcastTestimonials from "@/components/Landing/PodcastTestimonials";
import Footer from "@/components/Footer";
import { unstable_noStore as noStore } from 'next/cache';
export const dynamic = 'force-dynamic';
export default function Home() {
  noStore();
  return (
    <main className="w-full bg-white text-black">
      <PodcastHero />
      <PodcastHeading />
      <PodcastIntro />
      <PodcastEpisodeList />
      <PodcastTestimonials />
    </main>
  );
}
