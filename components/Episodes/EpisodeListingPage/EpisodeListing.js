'use client'

import { useState, useEffect } from 'react';
import EpisodesPagination from './EpisodesPagination';
import PodcastEpisodeList2 from './EpisodeItem';
import PodcastEpisodeList from '../PodcastEpisodeList';
import { getEpisodes } from '@/lib/helpers';
import PodcastEpisodeList_Client from './EpisodeItem';
import Link from 'next/link';

export default function EpisodeListing() {
    const [allEpisodes, setAllEpisodes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const itemsPerPage = 10;
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedEpisodes = await getEpisodes();
                setAllEpisodes(fetchedEpisodes || []);
                setLoading(false);
            } catch (err) {
                console.error("Failed to load episodes:", err);
                setError(err.message || 'Failed to load episodes.');
                setAllEpisodes([]);
            }


        };
        loadData();
    }, []);


    const indexOfLastEpisode = currentPage * itemsPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - itemsPerPage;
    const currentEpisodes = allEpisodes.slice(indexOfFirstEpisode, indexOfLastEpisode);
   

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <section className='flex flex-row justify-between items-center m-auto w-9/13'>
                <span>
                    <div className="mb-6 text-sm text-gray-500 flex flex-row gap-2 pt-8">
                        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                        &gt;
                        <p className="text-gray-500">Episodes</p>
                    </div>
                    <p className='font-semibold text-xl'>All Episodes</p>
                </span>

                <EpisodesPagination
                    currentPage={currentPage}
                    totalItems={allEpisodes.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />
            </section>
            {loading && (
                <div className="text-center py-20 text-gray-600">Loading episodes...</div>
            )}

            {error && (
                <div className="text-center py-20 text-red-600 bg-red-100 border border-red-400 rounded p-4 max-w-screen-md mx-auto">
                    Error: {error}
                </div>
            )}

            {!loading && !error && (
                <>
                    <PodcastEpisodeList_Client episodes={currentEpisodes} />
                    <EpisodesPagination
                        currentPage={currentPage}
                        totalItems={allEpisodes.length}
                        itemsPerPage={itemsPerPage}
                        onPageChange={handlePageChange}
                    />
                </>
            )}


        </>
    );
}
