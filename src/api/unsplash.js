import  axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID z0VW4ezBPsQ21nAAInfy0a4Rwr0NZkScu4lUfqbvV1o'
    }
});