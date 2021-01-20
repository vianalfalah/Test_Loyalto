const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

export const getGenres = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_GENRES_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_ALL_GENRES_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };

    case "GET_ALL_GENRES_REJECTED":
      return {
        ...state,
        isLoading: true,
        error: true,
      };
    default:
      return state;
  }
};
