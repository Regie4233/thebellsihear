import { getLandingPage } from "@/lib/helpers";
import Image from "next/image";

const PodcastHero = async () => {
    const data = await getLandingPage();
    // console.log(data)

    const imageUrl = data[0].hero_image !== "" ?
        `${process.env.NEXT_PUBLIC_PB_URL}/api/files/${data[0].collectionId}/${data[0].id}/${data[0].hero_image}`
        : 'https://placehold.co/2560x1140';


    return (
        <section className="w-full h-[60vh] overflow-hidden relative">
            <Image
                src={imageUrl}
                alt="Podcast Banner"
                fill
                // width={2560}
                // height={1140}
                priority={true}
                className="w-full h-full object-cover" />
            
        </section>
    );
};

export default PodcastHero;