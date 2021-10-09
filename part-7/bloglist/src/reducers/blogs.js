const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ALL":
      return [...action.payload];

    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      const others = state.filter((b) => b.id !== action.payload);
      return others;

    default:
      return state;
  }
};

export default blogReducer;
