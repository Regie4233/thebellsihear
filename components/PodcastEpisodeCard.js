import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PodcastEpisodeCard = ({ image, title, date, description, host, guest }) => {
    description = description.length > 400 ? description.slice(0, 400) + '...' : description;
    console.log(guest)
    return (
        <div className="border-t border-[#767676] pt-8 pb-8 flex flex-col md:flex-row gap-6 max-w-[1280px]">
            <section className='w-[480px] h-[480px] relative'>
                <Image
                    fill
                    src={image}
                    alt={title}
                    style={{ objectFit: 'cover' }}
                    className='bg-gray-200'
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized={'true'}
                // className="w-[480px] h-[480px] object-cover bg-gray-200"
                />
            </section>

            <div className="flex flex-col gap-4 flex-1">
                <div>
                    <h3 className="text-[26px] font-bold text-black/20">{title}</h3>
                    <p className="text-[#0860A3] text-sm font-semibold">{date}</p>
                </div>

                <div className="bg-[#FDC52A] h-[160px] rounded-lg" />

                <p className="text-[#474747] text-base font-light">{description}<Link className='text-nowrap text-blue-800' href='/'>Read More</Link></p>

                <div className="text-[#474747] text-sm">
                    <p>
                        <span className="font-bold">Host</span>
                        <span className="font-light">: {host}</span>
                    </p>
                    <p>
                        <span className="font-bold">Guest</span>
                        <span className="font-light">: {guest.map((name, index) => index + 1 === guest.length ? `${name}` : `${name}, ` )}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PodcastEpisodeCard;