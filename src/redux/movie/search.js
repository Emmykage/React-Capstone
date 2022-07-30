const searchQuery = 'https://api.tvmaze.com/search/shows?q=';
const SEARCH_MOVIE = 'movies/search/SEARCH_MOVIES';
const initialState = [];

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return action.payload;

    default:
      return state;
  }
};

export const searchedData = (query) => async (dispatch) => {
  const response = await fetch(searchQuery + query);
  const data = await response.json();

  dispatch({
    type: SEARCH_MOVIE,
    payload: data,
  });
};
export default searchReducer;
