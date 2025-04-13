import { getGuestInfo } from '@/lib/helpers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const PodcastEpisodeCard = async ({ image, title, date, description, host, guest, id, podcastid }) => {
    description = description.length > 400 ? description.slice(0, 400) + '...' : description;
    const embedUrl = `https://open.spotify.com/embed/episode/${podcastid}?utm_source=generator`;
  const { name, about } = await getGuestInfo(guest);

    return (
        <div className="border-t border-[#767676] pt-8 flex flex-col md:flex-row gap-6 max-w-[1280px]">
            <section className='w-full h-[230px] md:w-[480px] md:h-[480px] relative'>
                {
                    image !== null ?
                        <Image
                            fill
                            src={image}
                            alt={title}
                            style={{ objectFit: 'cover' }}
                            className='bg-gray-200 '
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                        // className="w-[480px] h-[480px] object-cover bg-gray-200"
                        />
                        :
                        <div className='bg-gray-300 h-full w-full' />
                }

            </section>

            <section className="flex flex-col gap-4 flex-1">
                <div>
                    <h3 className="text-[26px] font-bold ">{title}</h3>
                    <p className="text-[#0860A3] text-sm font-semibold">{date}</p>

                    <div className="bg-[#FDC52A] h-[160px] rounded-lg flex items-center justify-center">
                        <iframe
                            title={`Spotify Player for episode ${id}`}
                            // Tailwind class for rounded corners replaces inline style
                            className="w-full rounded-xl p-1" // Ensure full width and add border radius
                            src={embedUrl}
                            width={'100%'} // Width is set to 100% to fill the container
                            height={160} // Height is set dynamically via prop
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>



                    </div>
                </div>

                <p className="text-[#474747] text-base font-light">{description}<Link className='text-nowrap text-blue-800' href={'/episodes/' + id}>Read More</Link></p>

                <div className="text-[#474747] text-sm">
                    <p>
                        <span className="font-bold">Host</span>
                        <span className="font-light">: {host}</span>
                    </p>
                    <p>
                        <span className="font-bold">Guest</span>
                        <span className="font-light">: {name}</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PodcastEpisodeCard;