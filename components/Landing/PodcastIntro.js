const PodcastIntro = () => {
    return (
        <section className="w-full px-4 py-16 flex justify-center items-center bg-white">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-4">
                <div className="w-full text-center space-y-2">
                    <h2 className="text-[36px] font-bold  font-sans break-words">
                        Background Story of Mentor A Promise Podcast
                    </h2>

                    <h4 className="text-[22px] font-normal text-[#0860A3]">
                        Stories of Mentor A Promise Podcast Series
                    </h4>
                </div>

                <p className="text-[22px] text-[#474747] text-center leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </section>
    );
};

export default PodcastIntro;