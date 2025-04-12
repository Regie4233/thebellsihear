import React from 'react';
import TestimonialCard from "./TestimonialCard";
import { getTestimonials } from '@/lib/helpers';

const testimonials = [
    {
        image: "https://placehold.co/384x384",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "First name, Last name",
    },
    {
        image: "https://placehold.co/384x384",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "First name, Last name",
    },
    {
        image: "https://placehold.co/384x384",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "First name, Last name",
    },
];

const PodcastTestimonials = async () => {
    const testimonials = await getTestimonials();

    return (
        <section className="w-full px-4 py-16 flex flex-col items-center gap-16">
            <div className="w-full max-w-[1280px] flex flex-col items-start gap-4 border-b border-[#767676] pb-4">
                <h3 className="text-[26px] font-bold text-black/20">Testimonials</h3>
            </div>

            <div className="w-full max-w-[1280px] flex flex-col md:flex-row gap-16">
                {testimonials.map((data, index) => {
                    const testimonial = {
                        image: `${process.env.NEXT_PUBLIC_PB_URL}/api/files/${data.collectionId}/${data.id}/` + data.image || "https://placehold.co/480x480",
                        text: data.testimonial,
                        author: `${data.first_name} ${data.last_name}`
                    };
                    return (
                        <TestimonialCard key={index} {...testimonial} />
                    )
                })}
            </div>

            {/* <div className="w-full h-[420px] bg-[#FDC52A] rounded-xl flex justify-center items-center">
                <p className="text-[26px] font-bold text-black/20 text-center">
                    Call to action (marketing graphics)
                </p>
            </div> */}
        </section>
    );
};

export default PodcastTestimonials;