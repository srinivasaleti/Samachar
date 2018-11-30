import { combineReducers } from "redux";
import {
  SELECTED_SUB_REDDIT,
  RECIEVED_POSTS,
  SHOW_SUB_REDDIT_PANE_BUTTON_CLICKED,
  SUB_REDDIT_SELECTED
} from "../actions/actions";

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
    case SHOW_SUB_REDDIT_PANE_BUTTON_CLICKED:
      return {
        ...state,
        showSubRedditPane: !state.showSubRedditPane,
        subRedditPaneOpenAtleastOnce: true
      };
    case SUB_REDDIT_SELECTED:
      return {
        ...state,
        showSubRedditPane: !state.showSubRedditPane,
        subRedditPaneOpenAtleastOnce: true
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  subReddit: fetchReddit
});

export default rootReducer;
