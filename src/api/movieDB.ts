import  axios from "axios";


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ea4d8c7ccd19b522c89e1f975c38d63f',
        language: 'es-ES'
    }
});

export default movieDB;