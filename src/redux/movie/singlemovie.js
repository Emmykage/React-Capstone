const GET_MOVIE = 'singlemovie/lone/GET_MOVIE';

const url = 'https://api.tvmaze.com/shows';

const initialState = [];

const loneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return action.payload;

    default:
      return state;
  }
};

export const loneDAta = (id) => async (dispatch) => {
  const response = await fetch(url+id);
  const data = await response.json();
   dispatch({
    type: GET_MOVIE,
    payload: data,
  });
};
export default loneReducer