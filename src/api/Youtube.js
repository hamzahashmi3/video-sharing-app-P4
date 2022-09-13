import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

// use .env file to save this API Key
// AIzaSyADgyqMuDijbxaTariHt8gzspbmbzVJHHI