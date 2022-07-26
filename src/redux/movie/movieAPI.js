const GET_MOVIES = 'movies/movies/GET_MOVIES';
const SEARCH_MOVIE = 'movies/movies/SEARCH_MOVIES';
const url = 'https://api.tvmaze.com/shows';
const searchQuery = 'https://api.tvmaze.com/search/shows?q=';

const initialState = [];

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload;
    case SEARCH_MOVIE:
      return action.payload;

    default:
      return state;
  }
};

export const getMovieData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  // const movieDetails = [];
  // data.forEach((element) => {
  //   const singleMovie = {
  //     id: element.id,
  //     name: element.name,
  //     description: element.summary,
  //     image: element.image.medium,

  //   };
  //   movieDetails.push(singleMovie);
  // });
  // console.log(data);
  dispatch({
    type: GET_MOVIES,
    payload: data,
  });
};
export const searchedData = (query) => async (dispatch) => {
  const response = await fetch(searchQuery + query);
  const data = await response.json();
  console.log(data);
  dispatch({
    type: SEARCH_MOVIE,
    payload: data,
  });
};
export default MovieReducer;
