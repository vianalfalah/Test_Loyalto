import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const URLimg = "http://image.tmdb.org/t/p/w500";
