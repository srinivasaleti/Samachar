import * as Actions from "../../main/actions/actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Actions", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  fetch = jest.fn().mockReturnValue(Promise.resolve({ json: () => posts }));
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it("on sub reddit seleted ", () => {
    store.dispatch(Actions.selectedSubReddit("subReddit"));
    expect(store.getActions()).toEqual([
      {
        subReddit: "subReddit",
        type: "SELECTED_SUB_REDDIT"
      }
    ]);
  });

  it("on posts recevied", () => {
    const posts = {
      data: ["a", "b", "x"]
    };
    store.dispatch(Actions.recivedPosts(posts));
    expect(store.getActions(posts)).toEqual([
      {
        posts: { data: ["a", "b", "x"] },
        type: "RECIEVED_POSTS"
      }
    ]);
  });

  it("dispatch on Update store with ", async () => {
    const posts = {
      data: ["a", "b", "x"]
    };
    fetch = jest.fn().mockReturnValue(Promise.resolve({ json: () => posts }));
    store.dispatch(Actions.updateStoreWithPostsOf("subReddit")).then(() => {
      expect(
        store.getActions([{ type: "RECIEVED_POSTS", posts: ["a", "b", "x"] }])
      ).toEqual([{ posts: ["a", "b", "x"], type: "RECIEVED_POSTS" }]);
    });
  });
});
