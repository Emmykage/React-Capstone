const SET_DETAILS = 'movie-details/details/SET_DETAIL';
const detailstate = {
  name: '',
  description: '',
  genre: '',
};

const detailsReducer = (state = detailstate, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return action.payload;

    default:
      return state;
  }
};

export const setDetails = (payload) => ({
  type: SET_DETAILS,
  payload,

});
export default detailsReducer;
