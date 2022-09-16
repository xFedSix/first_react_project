import { combineReducers } from "redux";

const initialFormDataState = {
  formData: {
    name: "",
    email: "",
    number: "",
    message: "",
  },
};

const addFormDataReducer = (state = initialFormDataState, action) => {
  switch (action.type) {
    case "FORM_DATA":
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  addFormDataReducer,
});
