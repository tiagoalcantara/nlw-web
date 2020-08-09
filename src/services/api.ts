import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tiagoalcantara-nlw-proffy.herokuapp.com/',
});

export default api;