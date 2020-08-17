const loginReducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "setUsername":
      return { ...state, username: action.value }; // How do I tell it to use the form field value?
    case "setPassword":
      return { ...state, password: action.value };
    case "SET_USER_DETAILS":
      return { ...state, userDetails: action.value };
    default:
      return state;
  }
};

export default loginReducer;
