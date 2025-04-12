'use server'
import PocketBase from 'pocketbase';


export const getEpisodes = async () => {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
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

export const getEpisode = async (id) => {
    // console.log("ID" +id)
    const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
    await pb.collection('users').authWithPassword(process.env.PB_USER, process.env.PB_PASS);
    try {
        const records = await pb.collection('podcast_episodes').getOne(id, {
            expand: 'images',
        });
        // getFullList({
        //     sort: '-created',
        // });
        return records;
    } catch (e) {
        console.error('Error on getting podcast episodes: ' + e)
    }
}

export const getTestimonials = async () => {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
    await pb.collection('users').authWithPassword(process.env.PB_USER, process.env.PB_PASS);
    try {
        const records = await pb.collection('podcast_testimonials').getFullList({
            sort: '-created',
        });
        return records;
    } catch (e) {
        console.error('Error on getting podcast testimonials: ' + e)
    }
}

export const getPartners = async () => {
    try {
        const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
        await pb.collection('users').authWithPassword(process.env.PB_USER, process.env.PB_PASS);
        const data = await pb.collection('partners').getFullList({
            sort: '-created',
        });
       
        return data;
    } catch (e) {
        console.error('Error on getPARTNERS: ' + e)
    }
}

export const getGuestInfo = async (id) => {
    try {
        const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
        await pb.collection('users').authWithPassword(process.env.PB_USER, process.env.PB_PASS);
        const data = await pb.collection('podcast_guests').getOne( id);
       
        return data;
    } catch (e) {
        console.error('Error on getguests: ' + e)
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
    dateObject = new Date(dateObject);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = dateObject.getMonth();
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    // const paddedMonth = String(month).padStart(2, '0');
    const paddedDay = String(day).padStart(2, '0');

    const twoDigitYear = String(year).slice(-2); 

    // Combine the parts with hyphens
    return `${monthNames[month]}-${paddedDay}-${twoDigitYear}`;
}


// CMS for landing page
export const getLandingPage = async ()=> {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
    await pb.collection('users').authWithPassword(process.env.PB_USER, process.env.PB_PASS);
    try {
        const records = await pb.collection('podcast_page').getFullList({
            sort: '-created',
        });
        return records;
    } catch (e) {
        console.error('Error on getting landing page: ' + e)
    }
}