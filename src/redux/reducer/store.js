// const initialState = {
//   data: [],
//   isLoading: false,
//   error: false,
// };

// export const getGenres = (state = initialState, action) => {
//   switch (action.type) {
//     case "GET_ALL_GENRES_PENDING":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case "GET_ALL_GENRES":
//       return {
//         ...state,
//         data: action.data,
//       };

//     case "GET_ALL_GENRES_FULFILLED":
//       return {
//         ...state,
//         isLoading: false,
//         data: action.payload.data,
//       };

//     case "GET_ALL_GENRES_REJECTED":
//       return {
//         ...state,
//         isLoading: true,
//         error: true,
//       };
//     default:
//       return state;
//   }
// };

import { createStore } from "redux";

const initialState = {
  listGenres: [],
  listMovies: [],
  detailMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_GENRES":
      return {
        ...state,
        listGenres: action.data,
      };
    case "GET_ALL_MOVIES":
      return {
        ...state,
        listMovies: action.data,
      };
    case "GET_DETAIL_MOVIE":
      return {
        ...state,
        detailMovies: action.data,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
