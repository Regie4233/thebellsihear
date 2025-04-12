import { formatDateToMMDDYY, getEpisode, getEpisodes, getGuestInfo } from '@/lib/helpers';
import Image from 'next/image';
import Link from 'next/link';
import SpotifyFrame from '@/components/SpotifyFrame';


export default async function EpisodePage({ params }) {

  const { id } = await params;

  const episode = await getEpisode(id);
  const allEpisodes = await getEpisodes();
  const episodeIndex = allEpisodes.reverse().findIndex((ep) => ep.id === id) + 1;
  const { name, about, image } = await getGuestInfo(episode.guests);
  // Guard clause for episode not found
  if (!episode) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold text-red-600">Episode Not Found</h1>
        <p className="mt-4 text-gray-600">
          Sorry, we couldnt find the episode you were looking for.
        </p>
        <Link href="/episodes" className="mt-6 inline-block rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
          Back to Episodes
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
      {/* Optional: Breadcrumbs */}
      <div className="mb-6 text-sm text-gray-500 flex flex-row gap-2">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        &gt;
        <Link href="/episodes" className="text-blue-600 hover:underline">Episodes</Link>
        &gt;
        <span>{episode.Title}</span>
      </div>
      {/* --- TOP COVER Image (New) --- */}
      <div className="w-full h-[516px] relative rounded-md overflow-hidden shadow-md mb-8">
        <Image
          src={
            episode.images?.length > 0
              ? `${process.env.NEXT_PUBLIC_PB_URL}/api/files/${episode.collectionId}/${episode.id}/${episode.images[0]}`
              : 'https://placehold.co/1280x516'
          }
          alt={episode.Title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <article className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">

        {/* --- Details Section --- */}
        <div className="max-w-[960px] w-full mx-auto">
          <h2 className="text-[36px] font-bold  leading-tight">
            Episode No. {episodeIndex} | {episode.Title || "Title of Podcast Episode"}
          </h2>


          <div className="max-w-[960px] w-full mx-auto text-[#7E7E7E] text-[16px] font-semibold mb-4">
            {formatDateToMMDDYY(episode.date)} | {episode.duration || '32min 24secs'}
          </div>

          {/* Media Player */}
          <div className="w-full max-w-[960px] h-[160px] mx-auto bg-[#0860A3] rounded-[16px] flex items-center justify-center text-white text-[26px] font-bold mb-6">
            <SpotifyFrame podcastid={episode.podcastid} />
          </div>
          {/* Blog */}
          <div className="w-full max-w-[960px] mx-auto text-[16px]  leading-relaxed mb-8">
            {episode.Blog}
          </div>


          {/* Host name and guest name */}
          <div className="w-full max-w-[960px] mx-auto mt-6 pt-4 text-[16px] ">
            <p className="mb-1"><strong className="font-bold">Host:</strong> {episode.host}</p>
            {<p><strong clasname="font-bold">Guest:</strong>{' '}{name}</p>}
          </div>

          {/* Quote */}
          <div className="w-full py-8 flex flex-col items-center justify-center gap-16">
            {episode.quotes?.length > 0 &&
              <div className="w-full max-w-[960px] px-16 py-8 border-y-[6px] border-[#7E7E7E] flex flex-col items-center gap-4">
                {/* Top Quote Icon */}
                <img src="/assets/quotes/quote_left.png" alt="quote left" className="w-9 h-9" />

                <div className="flex flex-col items-center gap-2">
                  {/* Dynamic Quote Content */}
                  <div className="text-center text-[#0860A3] text-[26px] font-bold leading-snug">
                    {episode.quotes}
                  </div>

                  {/* Dynamic Guests Display */}
                  {/* <div className="text-center  text-[16px] font-normal">
                      – {(await getGuestsList(episode)).join(', ')} */}
                  {/* </div> */}
                </div>

                {/* Bottom Quote Icon */}
                <img src="/assets/quotes/quote_right.png" alt="quote right" className="w-9 h-9" />
              </div>
            }

          </div>

          {/* --- Marketing Graphics Section --- */}
          <div className="w-full max-w-6xl mx-auto mt-12">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-[#FDC52A] rounded-[20px] overflow-hidden h-[309px] w-full"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_PB_URL}/api/files/${episode.collectionId}/${episode.id}/${episode.images?.[0]}`}
                    alt={`Episode Graphic ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- Guest Bio Section --- */}
          <div className="w-full max-w-[960px] mt-8">

            <div className="text-[26px] font-bold  mb-2 font-[Mona Sans]">
              Guest Bio
            </div>

            {/* Guest Name */}
            <div className="text-[26px] font-bold text-[#0860A3] mb-2 font-[Mona Sans]">
              {/* {(await getGuestsList(episode))[0]} */}{name}
            </div>

            {/* Guest Bio Description */}
            <div className="text-[16px]  font-normal leading-relaxed font-[Mona Sans]">
              {about}
            </div>
          </div>
        </div>
      </article>

    </div>
  );
}

