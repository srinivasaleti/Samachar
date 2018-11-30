import { fetchReddit } from "../../main/reducers/reducers";
import {
  SELECTED_SUB_REDDIT,
  RECIEVED_POSTS
} from "../../main/actions/actions";
describe("Reducers", () => {
  describe("Fetch Reddit", () => {
    it("Update state with selected subreddit when sub reddit selected", () => {
      const action = {
        type: SELECTED_SUB_REDDIT,
        subReddit: "subReddit"
      };
      expect(fetchReddit({}, action)).toEqual({
        selectedSubReddit: "subReddit",
        showSubRedditPane: false,
        subRedditsFetching: true
      });
    });

    it("Update state with recieved posts when posts recieved", () => {
      const action = {
        type: RECIEVED_POSTS,
        posts: ["posts"]
      };
      expect(fetchReddit({}, action)).toEqual({
        posts: ["posts"],
        subRedditsFetching: false
      });
    });
  });
});
