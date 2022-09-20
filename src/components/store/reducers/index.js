import { combineReducers } from "redux";

const initialFormDataState = {
  formData: {
    name: "",
    email: "",
    number: "",
    message: "",
  },
};

const initialBlogState = {
  isLoading: false,
  blogs: [],
};
const addFormDataReducer = (state = initialFormDataState, action) => {
  switch (action.type) {
    case "FORM_DATA":
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

const fetchBlogReducer = (state = initialBlogState, action) => {
  switch (action.type) {
    case "FETCH_BLOG_REQUEST":
      return { ...state, isLoading: true };
    case "FETCH_BLOG_SUCCESS":
      return { ...state, isLoading: false, blogs: action.payload };
    case "FETCH_BLOG_FAILURE":
      return { ...state, isLoading: false, blogs: [] };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  addFormDataReducer,
  fetchBlogReducer,
});
