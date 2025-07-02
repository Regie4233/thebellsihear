'use client'
import { formatDateToMMDDYY, formatDurationRefined } from '@/lib/clientHelpers';
import PodcastEpisodeCard from './PodcastEpisodeCard';
import {  getEpisodes } from '@/lib/helpers';
import { useEffect, useState } from 'react';

const PodcastEpisodeList = () => {
    const [playPodcasst, setPlayPodcast] = useState('');
    const [episodes, setEpisodes] = useState( { items: [] });

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const data = await getEpisodes(4);
                setEpisodes(data);
                // console.log(data)
            } catch (error) {
                console.error("Error fetching episodes:", error);
            }
        };
        fetchEpisodes();
    }, []);
    if (!episodes || !episodes.items || episodes.items.length === 0) {
        return <div className="text-center py-10 text-gray-500">No episodes found.</div>;
    }

    const handlePlayBlog = (id) => {
        if (playPodcasst === id) {
            setPlayPodcast('');
        } else {
            setPlayPodcast(id);
        }
    }


    return (
        <section className="w-full max-w-screen-xl mx-auto px-4 py-16">
            <h2 className="text-[26px] font-bold text-black/20">Episodes</h2>
            <div className='flex flex-col gap-8'>
                {
                    episodes.items.map((ep, idx) => {
                        const date = formatDateToMMDDYY(ep.date);
                        const data = {
                            image: ep.images[0] !== undefined ? `${process.env.NEXT_PUBLIC_PB_URL}/api/files/${ep.collectionId}/${ep.id}/` + ep.images[0] : null,
                            title: ep.Title || "Title of Podcast Episode",
                            date: `${date} | ${formatDurationRefined(ep.duration_min)}` || "April 000, 2025 | 00min 00secs",
                            description:
                                ep.Blog || "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            host: ep.host,
                            guest: ep.guests,
                            id: ep.id,
                            podcastid: ep.podcastid,
                        }
                        return (
                            <PodcastEpisodeCard key={idx} {...data} showBlog={ep.id === playPodcasst} setPlay={handlePlayBlog} />
                        )
                    })}
            </div>
        </section>
    );
};

export default PodcastEpisodeList;
