import axios from "axios";

// import {token} from '../config/index'

export const getGenres = () => {
  return {
    type: "GET_ALL_GENRES",
    payload: axios({
      method: "GET",
      url:
        "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49",
    }),
  };
};
