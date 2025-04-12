import SpotifyFrame from '@/components/SpotifyFrame';
import Image from 'next/image';
import Link from 'next/link';

const EpisodeItem = ({ episode }) => {
    const blog = episode.blog.length > 400 ? episode.blog.slice(0, 400) + '...' : episode.blog;
   
    return (
        <div className="border-t border-[#767676] pt-8 flex flex-col md:flex-row gap-6 max-w-[1280px]">
            <section className='w-full h-[230px] md:w-[480px] md:h-[480px] relative'>
                {
                    episode.image !== null ?
                        <Image
                            fill
                            src={episode.image}
                            alt={episode.title}
                            style={{ objectFit: 'cover' }}
                            className='bg-gray-200 '
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                        />
                        :
                        <div className='bg-gray-300 h-full w-full' />
                }
            </section>
            <section className="flex flex-col gap-4 flex-1">
                <div>
                    <h3 className="text-[26px] font-bold text-black">{episode.title}</h3>
                    <p className="text-[#0860A3] text-sm font-semibold">{episode.date}</p>
                    <div className="bg-[#FDC52A] h-[160px] rounded-lg flex items-center justify-center">
                       <SpotifyFrame podcastid={episode.podcastid}/>
                    </div>
                </div>

                <p className="text-[#474747] text-base font-light">{blog}<Link className='text-nowrap text-blue-800' href={'/episodes/' + episode.id}>Read More</Link></p>

                <div className="text-[#474747] text-sm">
                    <p>
                        <span className="font-bold">Host</span>
                        <span className="font-light">: {episode.host}</span>
                    </p>
                    <p>
                        <span className="font-bold">Guest</span>
                        {/* <span className="font-light">: {guest.map((name, index) => index + 1 === guest.length ? `${name}` : `${name}, `)}</span> */}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default function PodcastEpisodeList_Client({ episodes }) {
    if (!episodes || episodes.length === 0) {
        return <div className="text-center py-10 ">No episodes found.</div>;
    }

    return (
        <div className="w-fulls max-w-screen-xl mx-auto w-9/13">
            <div className="flex flex-col gap-6 md:gap-8">
                {episodes.map((ep, idx) => {

                    const data = {
                        image: ep.images[0] !== undefined ? `${process.env.NEXT_PUBLIC_PB_URL}/api/files/${ep.collectionId}/${ep.id}/` + ep.images[0] : null,
                        title: ep.Title || "Title of Podcast Episode",
                        date: "April 000, 2025 | 00min 00secs",
                        blog: ep.Blog || "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        host: ep.host,
                        guest: ep.guests,
                        id: ep.id,
                        podcastid: ep.podcastid,
                    }
                    return (
                        <EpisodeItem key={idx} episode={data} />
                    )
                })}
            </div>
        </div>
    );
}