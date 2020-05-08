import axios from 'axios';

const KEY = "AIzaSyBz2wlIOVNJPLEe4LUJklvz7Ky2GdVAKM0";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,

    }
});
