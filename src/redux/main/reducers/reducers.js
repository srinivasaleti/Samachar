import { combineReducers } from "redux";
import { SELECTED_SUB_REDDIT, RECIEVED_POSTS } from "../actions/actions";

export const fetchReddit = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_SUB_REDDIT:
      const subReddit = action.subReddit;
      return {
        ...state,
        selectedSubReddit: subReddit
      };
    case RECIEVED_POSTS:
      const posts = action.posts;
      return {
        ...state,
        posts
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  subReddit: fetchReddit
});

export default rootReducer;
