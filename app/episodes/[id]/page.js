import { formatDateToMMDDYY, getEpisode, getGuestsList } from '@/lib/helpers';
import Image from 'next/image';
import Link from 'next/link'; 


export default async function EpisodePage({ params }) {

  const { id } = await params;

  const episode = await getEpisode(id);

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

      <article className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
        {/* --- Image Section --- */}
        <div className="w-full md:w-1/3 lg:w-2/5 md:max-w-sm">
          {episode.images ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_PB_URL}/api/files/${episode.collectionId}/${episode.id}/` + episode.images[0]}
              alt={`Podcast artwork for ${episode.Title}`}
              width={500} 
              height={500} 
              className="aspect-square w-full rounded-md object-cover shadow-md"
              priority 
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-md bg-gray-200 text-gray-500 shadow-sm">
              Image Placeholder
            </div>
          )}
        </div>

        {/* --- Details Section --- */}
        <div className="w-full md:w-2/3 lg:w-3/5">
          <h1 className="mb-1 text-2xl font-semibold text-gray-800 md:text-3xl lg:text-4xl">
            Episode: {episode.Title || "Title of Podcast Episode"}
          </h1>

          <div className="mb-4 inline-block rounded bg-yellow-400 px-2 py-1 text-xs font-medium text-gray-800 md:text-sm">
            {formatDateToMMDDYY(episode.date)} 
          </div>

          <div className="prose prose-sm md:prose-base mt-4 max-w-none text-gray-700">
          
            <p>{episode.Blog}</p>
         
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-600">
            <p className="mb-1"><strong>Host:</strong> {episode.host}</p>
            {<p><strong>Guest:</strong> {(await getGuestsList(episode)).map((name, index) => index + 1 === getGuestsList(episode).length ? `${name}` : `${name}, ` )}</p>}
          </div>

        </div>
      </article>
    </div>
  );
}

