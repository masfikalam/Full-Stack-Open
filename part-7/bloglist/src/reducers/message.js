const messageReducer = (state = "", action) => {
  switch (action.type) {
    case "NOTIFY":
      return action.payload;

    case "CLEAR":
      return "";

    default:
      return state;
  }
};

export default messageReducer;
