import Image from "next/image";

const TestimonialCard = ({ image, text, author }) => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
            <figure className="w-[238] h-[238px] md:h-[384px] md:w-[384px] relative">
            <Image src={image} alt={author} priority style={{"objectFit": "cover"}} fill sizes="100vw" className=" bg-gray-200" />
             </figure>
            <div className="flex flex-col gap-4 text-center">
                <p className="text-[20px] text-black/20 font-bold tracking-wide">“{text}”</p>
                <p className="text-[#999999] text-[20px] font-bold tracking-wide">- {author}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;