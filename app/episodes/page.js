import EpisodeListing from '@/components/Episodes/EpisodeListingPage/EpisodeListing'
import Link from 'next/link'
import React from 'react'

export default function EpisodeListAll() {
  return (
    <main className='border-b'>
    
      <Heading />
      <EpisodeListing />
    </main>
  )
}

const Heading = () => {
  return (
    <section className="bg-[#0056A3] text-white py-8">
      <div className='w-fulsl max-w-screen-xl mx-auto w-9/13'>
        <h1 className="text-[36px] md:text-[48px] font-bold">
          The Bells I Hear Podcast Series
        </h1>
        <p className="mt-2 text-base md:text-lg opacity-90">
          Stories of Mentor A Promise Podcast Series
        </p>
      </div>
    </section>
  )
}