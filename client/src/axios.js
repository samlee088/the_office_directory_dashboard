import axios from 'axios';

const instance = axios.create({
    baseURL: "https://theofficeapi-angelinepinilla.b4a.run/",
})

export default instance;
