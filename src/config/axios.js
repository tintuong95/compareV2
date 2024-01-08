import axios from "axios";


export const axiosLine = axios.create({
    baseURL: 'https://vn.mes.friwo.local:8083',
    timeout: 3000,
    headers: { 'X-Custom-Header': 'foobar' }
});