const GET_MOVIES = 'movies/movies/GET_MOVIES';

const url = 'https://api.tvmaze.com/shows';

const initialState = [];

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload;

    default:
      return state;
  }
};

export const getMovieData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  dispatch({
    type: GET_MOVIES,
    payload: data,
  });
};

export default MovieReducer;
