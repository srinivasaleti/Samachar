export const SELECTED_SUB_REDDIT = "SELECTED_SUB_REDDIT";
export const RECIEVED_POSTS = "RECIEVED_POSTS";
export const SHOW_SUB_REDDIT_PANE_BUTTON_CLICKED =
  "SHOW_SUB_REDDIT_PANE_BUTTON_CLICKED";
export const SUB_REDDIT_SELECTED = "SUB_REDDIT_SELECTED";

export const selectedSubReddit = subReddit => {
  return {
    type: SELECTED_SUB_REDDIT,
    subReddit
  };
};

export const recivedPosts = posts => {
  return {
    type: RECIEVED_POSTS,
    posts
  };
};

export const updateStoreWithPostsOf = subReddit => {
  return dispatch => updateStoreWithPosts(dispatch, subReddit);
};

export const showSubRedditPaneButtonClicked = () => {
  return {
    type: SHOW_SUB_REDDIT_PANE_BUTTON_CLICKED
  };
};

export const subRedditSelected = () => {
  return {
    type: SUB_REDDIT_SELECTED
  };
};

const updateStoreWithPosts = async (dispatch, subReddit) => {
  const response = await fetch(
    "https://www.reddit.com/r/" + subReddit + ".json?limit=100"
  );
  const posts = await response.json();
  return dispatch(recivedPosts(posts.data));
};
