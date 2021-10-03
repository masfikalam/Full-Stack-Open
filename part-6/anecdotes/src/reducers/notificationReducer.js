export const notify = (text, ms) => {
  return async (dispatch) => {
    clearTimeout();

    dispatch({
      type: "SET_NOTIFICATION",
      notification: text,
    });

    setTimeout(() => {
      dispatch({
        type: "SET_NOTIFICATION",
        notification: "",
      });
    }, ms * 1000);
  };
};

const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.notification;
    default:
      return state;
  }
};

export default notificationReducer;
