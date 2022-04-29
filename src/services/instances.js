import axios from "axios";

export const apiBaseUrl = "https://api.themoviedb.org/3";
const api_key = "4740b11844f2ed98cc946381d8091b2e";
export const baseImageUrl = "http://image.tmdb.org/t/p/w500/";

export const api = axios.create({
  baseURL: apiBaseUrl,
  params: {
    api_key: api_key,
  },
});
