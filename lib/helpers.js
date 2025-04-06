'use server'
import PocketBase from 'pocketbase';
const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);

export const getEpisodes = async () => {
    await pb.collection('users').authWithPassword(process.env.PB_USER, process.env.PB_PASS);
    try {
        const records = await pb.collection('podcast_episodes').getFullList({
            sort: '-created',
        });
        return records;
    } catch (e) {
        console.error('Error on getting podcast episodes: ' + e)
    }
}

export const getTestimonials = async () => {
    await pb.collection('users').authWithPassword(process.env.PB_USER, process.env.PB_PASS);
    try {
        const records = await pb.collection('podcast_tesstimonials').getFullList({
            sort: '-created',
        });
        return records;
    } catch (e) {
        console.error('Error on getting podcast testimonials: ' + e)
    }
}

export const getGuestsList = async (episode) => {
    const guests = new Array(episode.guest_1, episode.guest_2, episode.guest_3, episode.guest_4)
    const filteredArray = guests.filter(str => {
        return typeof str !== 'string' || str.trim() !== '';
    });
    return filteredArray;
}

export const formatDateToMMDDYY = async (dateObject = new Date()) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = dateObject.getMonth();
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    console.log(month)
    // const paddedMonth = String(month).padStart(2, '0');
    const paddedDay = String(day).padStart(2, '0');

    const twoDigitYear = String(year).slice(-2); 

    // Combine the parts with hyphens
    return `${monthNames[month]}-${paddedDay}-${twoDigitYear}`;
}
