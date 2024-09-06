import axios from "axios"
import { API_KEY, GEO_API, WEATHER_API } from "../config";

export const api = {
    getCityCoordinates: (name) => {
        return axios.get(`${GEO_API}/direct?q=${name}&limit=1&appid=${API_KEY}`);
    },
    getDaysForecast: ({ lat, lon }) => {
        return axios.get(`${WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    },
    getWeather: ({ lat, lon }) => {
        return axios.get(`${WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    }
}