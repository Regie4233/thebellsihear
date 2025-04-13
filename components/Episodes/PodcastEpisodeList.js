
import PodcastEpisodeCard from './PodcastEpisodeCard';
import { formatDateToMMDDYY, getEpisodes } from '@/lib/helpers';

const PodcastEpisodeList = async () => {
    const episodes = await getEpisodes(10);

    if (!episodes.items || episodes.items.length === 0) {
        return <div className="text-center py-10 text-gray-500">No episodes found.</div>;
    }
    return (
        <section className="w-full max-w-screen-xl mx-auto px-4 py-16">
            <h2 className="text-[26px] font-bold text-black/20">Episodes</h2>
            <div className='flex flex-col gap-8'>
                {
                    episodes.items.map(async (ep, idx) => {
                        // const guests = await getGuestsList(ep);
                        const date = await formatDateToMMDDYY(ep.date);
                        const data = {
                            image: ep.images[0] !== undefined ? `${process.env.NEXT_PUBLIC_PB_URL}/api/files/${ep.collectionId}/${ep.id}/` + ep.images[0]: null,
                            title: ep.Title || "Title of Podcast Episode",
                            date: `${date} | ${ep.duration_min}min` || "April 000, 2025 | 00min 00secs",
                            description:
                                ep.Blog || "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            host: ep.host,
                            guest: ep.guests,
                            id: ep.id,
                            podcastid: ep.podcastid,
                        }
                        return (
                            <PodcastEpisodeCard key={idx} {...data} />
                        )
                    })}
            </div>
        </section>
    );
};

export default PodcastEpisodeList;

