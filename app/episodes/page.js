import { formatDateToMMDDYY, getEpisodes } from '@/lib/helpers'; // Assuming you have getAllEpisodes
import Image from 'next/image';
import Link from 'next/link';

// Function to truncate text (can be moved to helpers if reused)
function truncateText(text, maxLength = 150) {
  if (!text) return '';
  if (text.length <= maxLength) {
    return text;
  }
  // Find the last space within the limit to avoid cutting words
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace > 0 ? lastSpace : maxLength) + '...';
}


export default async function EpisodesListPage() {
  // Fetch all episodes - Assuming getAllEpisodes returns an array of episode objects
  const episodes = await getEpisodes();

  // Handle loading state or errors if needed (Server Components render on server)
  if (!episodes) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-600">Loading episodes or could not fetch data...</p>
        {/* You could add more robust error handling here */}
      </div>
    );
  }

  if (episodes.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-4 text-2xl font-semibold text-gray-800">No Episodes Found</h1>
        <p className="text-gray-600">Check back later for new content!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl border-b pb-4">
        Podcast Episodes
      </h1>
      <Link href={'/'}>Back Home</Link>

      <div className="space-y-8">
        {episodes.map((episode) => (
          <article key={episode.id} className="flex flex-col gap-4 rounded-lg border border-gray-200 p-4 shadow-sm transition-shadow duration-200 hover:shadow-md md:flex-row md:gap-6">
            {/* --- Image Section (List View) --- */}
            <div className="w-full flex-shrink-0 md:w-48 lg:w-56">
              <Link href={`/episodes/${episode.id}`}>
                {episode.images && episode.images.length > 0 ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_PB_URL}/api/files/${episode.collectionId}/${episode.id}/${episode.images[0]}`}
                    alt={`Artwork for ${episode.Title}`}
                    width={200}
                    height={200}
                    className="aspect-square w-full rounded-md object-cover"
                  />
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center rounded-md bg-gray-200 text-sm text-gray-500">
                    No Image
                  </div>
                )}
              </Link>
            </div>

            {/* --- Details Section (List View) --- */}
            <div className="flex flex-col justify-center">

              <div className="mb-2 inline-block self-start rounded bg-yellow-400 px-2 py-0.5 text-xs font-medium text-gray-800">
                {formatDateToMMDDYY(episode.date)}
              </div>

              {/* Title */}
              <h2 className="mb-2 text-lg font-semibold text-gray-800 hover:text-blue-700 md:text-xl">
                <Link href={`/episodes/${episode.id}`}>
                  {episode.Title || 'Untitled Episode'}
                </Link>
              </h2>

              {/* Description Excerpt */}
              <p className="mb-3 text-sm text-gray-600 line-clamp-3">
                {truncateText(episode.Blog, 150)}
              </p>

              {/* Host Info (Optional for List View) */}
              <p className="mb-3 text-xs text-gray-500">
                <strong>Host:</strong> {episode.host || 'N/A'}
              </p>

              {/* Read More Link */}
              <Link href={`/episodes/${episode.id}`} className="text-sm font-medium text-blue-600 hover:underline self-start">
                Listen to Episode →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}