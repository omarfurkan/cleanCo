import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://localhose:5000',
});

export default fetcher;