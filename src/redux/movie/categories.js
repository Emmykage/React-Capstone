const GET_CATEGORY = 'movie-category/categories/GET_CATEGORY';
const categoryState = [];

const categoryReducer = (state = categoryState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return action.payload;

    default:
      return state;
  }
};

export const getCategory = (payload) => ({
  type: GET_CATEGORY,
  payload,

});
export default categoryReducer;
