import { getLandingPage, getPageInfo } from "@/lib/helpers";

const PodcastIntro =  async () => {

    const data = await getLandingPage();
    return (
        <section className="w-full px-4 py-16 flex justify-center items-center bg-white">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-4">
                <div className="w-full text-center space-y-2">
                    <h2 className="text-heading3 md:text-heading1 font-sans break-words">
                        Background Story of Mentor A Promise Podcast
                    </h2>

                    <h4 className="text-[22px] font-normal text-[#0860A3]">
                        Stories of Mentor A Promise Podcast Series
                    </h4>
                </div>

                <div dangerouslySetInnerHTML={{ __html: data[0].background_story }} className="text-[22px] text-[#474747] leading-relaxed whitespace-pre-line"/>
            </div>
        </section>
    );
};

export default PodcastIntro;