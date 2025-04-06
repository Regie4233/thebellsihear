import React from 'react';
const PodcastHeroImage = () => {
    return (
        <section className="w-full h-[60vh] overflow-hidden">
            <img
                src="https://placehold.co/2560x1140"
                alt="Podcast Banner"
                className="w-full h-full object-cover"
            />
        </section>
    );
};

export default PodcastHeroImage;