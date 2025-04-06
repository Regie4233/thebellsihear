const TestimonialCard = ({ image, text, author }) => {
    return (
        <div className="flex-1 flex flex-col gap-8">
            <img src={image} alt={author} className="w-full h-[384px] object-cover bg-gray-200" />
            <div className="flex flex-col gap-4 text-center">
                <p className="text-[20px] text-black/20 font-bold tracking-wide">“{text}”</p>
                <p className="text-[#999999] text-[20px] font-bold tracking-wide">- {author}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;