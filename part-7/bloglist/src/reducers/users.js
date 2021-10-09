const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...action.payload };

    case "LOGOUT":
      localStorage.removeItem("user");
      return {};

    default:
      return state;
  }
};

export default userReducer;
