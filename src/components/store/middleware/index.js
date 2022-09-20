import { fetchBlogFailureAC, fetchBlogSuccessAC } from "../actionCreators";
import { URL } from "../../../templates/Blog/constants";

export const fetchBlogMiddleware = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      dispatch(fetchBlogSuccessAC(data));
    } catch (e) {
      console.error(e.message);
      dispatch(fetchBlogFailureAC(e.message));
    }
  };
};
