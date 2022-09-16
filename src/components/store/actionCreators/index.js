export const formDataAC = (formData) => {
  return {
    type: "FORM_DATA",
    payload: formData,
  };
};

export const bindActionCreator =
  (creator, dispatch) =>
  (...arg) => {
    dispatch(creator(...arg));
  };
