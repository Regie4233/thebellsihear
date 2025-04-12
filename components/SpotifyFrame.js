
export default function SpotifyFrame({ podcastid }) {
    const embedUrl = `https://open.spotify.com/embed/episode/${podcastid}?utm_source=generator`;
    return (
        <div className="bg-[#FDC52A] h-[160px] rounded-lg flex items-center justify-center w-full">
            {
                <iframe
                    title={`Spotify Player for episode ${podcastid}`}
                    className="w-full rounded-xl p-1"
                    src={embedUrl}
                    width={'100%'}
                    height={160}
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            }
        </div>
    )
}
