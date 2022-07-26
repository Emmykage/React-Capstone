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
  const movieDetails = [];
  data.forEach((element) => {
    const singleMovie = {
      id: element.id,
      name: element.name,
      description: element.summary,
      image: element.image.medium,

    };
    movieDetails.push(singleMovie);
  });
  //   console.log(movieDetails);
  dispatch({
    type: GET_MOVIES,
    payload: movieDetails,
  });
};

export default MovieReducer;
