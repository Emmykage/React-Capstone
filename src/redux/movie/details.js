const SET_DETAILS = 'movie-details/details/SET_DETAIL';
const GET_MOVIE = 'singlemovie/lone/GET_MOVIE';
const detailstate = {
  name: '',
  description: '',
  genre: '',
};

const detailsReducer = (state = detailstate, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return action.payload;
    case GET_MOVIE:
      return action.payload;

    default:
      return state;
  }
};

export const setDetails = (payload) => ({
  type: SET_DETAILS,
  payload,

});
export const loneDAta = (id) => async (dispatch) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await response.json();
  dispatch({
    type: GET_MOVIE,
    payload: data,
  });
};
export default detailsReducer;
