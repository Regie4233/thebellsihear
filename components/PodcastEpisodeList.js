import PodcastEpisodeCard from './PodcastEpisodeCard';
import { formatDateToMMDDYY, getEpisodes, getGuestsList } from '@/lib/helpers';

const PodcastEpisodeList = async () => {
    const episodes = await getEpisodes();
   
    return (
        <section className="w-full max-w-screen-xl mx-auto px-4 py-16">
            <h2 className="text-[26px] font-bold text-black/20 mb-12">Episodes</h2>
            {
                episodes.map(async(ep, idx) => {
                    const guests = await getGuestsList(ep);
                    const date = await formatDateToMMDDYY(ep.date);
                    const data = {
                        image: `${process.env.NEXT_PUBLIC_PB_URL}/api/files/${ep.collectionId}/${ep.id}/` + ep.images[0] || "https://placehold.co/480x480",
                        title: ep.Title || "Title of Podcast Episode",
                        date: `${date} | ${ep.duration_min}min` || "April 000, 2025 | 00min 00secs",
                        description:
                            ep.Blog || "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        host: ep.host,
                        guest: guests,
                        id: ep.id
                    }
                    return (
                        <PodcastEpisodeCard key={idx} {...data} />
                    )
                })}
        </section>
    );
};

export default PodcastEpisodeList;

