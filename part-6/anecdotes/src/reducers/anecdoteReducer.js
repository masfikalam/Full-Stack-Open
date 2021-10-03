import { getAll, postOne, voteOne } from "../services/anecdotes";

export const initAnc = (data) => {
  return async (dispatch) => {
    const data = await getAll();
    dispatch({
      type: "INIT",
      data,
    });
  };
};

export const voteAnc = (data) => {
  return async (dispatch) => {
    const anc = await voteOne(data.id, { ...data, votes: data.votes + 1 });
    dispatch({
      type: "VOTE",
      data: anc,
    });
  };
};

export const addAnc = (content) => {
  return async (dispatch) => {
    const anc = await postOne(content);
    dispatch({
      type: "ADD",
      data: anc,
    });
  };
};

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return action.data;

    case "VOTE":
      return state.map((anc) =>
        anc.id === action.data.id ? action.data : anc
      );

    case "ADD":
      return [...state, action.data];

    default:
      return state;
  }
};

export default anecdoteReducer;
