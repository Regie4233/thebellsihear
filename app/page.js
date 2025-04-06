import PodcastHero from "@/components/PodcastHero";
import PodcastHeading from "@/components/PodcastHeading";
import PodcastIntro from "@/components/PodcastIntro";
import PodcastEpisodeList from "@/components/PodcastEpisodeList";
import PodcastTestimonials from "@/components/PodcastTestimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-white text-black">
    <PodcastHero />
    <PodcastHeading />
    <PodcastIntro />
    <PodcastEpisodeList />
    <PodcastTestimonials />
    <Footer />
</main>
  );
}
