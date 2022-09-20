export const formDataAC = (formData) => {
  return {
    type: "FORM_DATA",
    payload: formData,
  };
};

export const fetchBlogSuccessAC = (blogsFromServer) => {
  return {
    type: "FETCH_BLOG_SUCCESS",
    payload: blogsFromServer,
  };
};

export const fetchBlogFailureAC = (errorMessageFromServer) => {
  return {
    type: "FETCH_BLOG_FAILURE",
    payload: errorMessageFromServer,
  };
};

export const bindActionCreator =
  (creator, dispatch) =>
  (...arg) => {
    dispatch(creator(...arg));
  };
