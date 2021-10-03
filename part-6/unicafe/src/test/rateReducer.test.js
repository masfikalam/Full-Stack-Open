import deepFreeze from "deep-freeze";
import rateReducer from "../reducers/rateReducer";

describe("unicafe reducer", () => {
  const initState = { good: 0, ok: 0, bad: 0 };

  test("should return default state", () => {
    const newState = rateReducer(undefined, { type: "DO_NOTHING" });
    expect(newState).toEqual(initState);
  });

  test("should incremented good rate", () => {
    const state = initState;
    deepFreeze(state);

    const newState = rateReducer(state, { type: "GOOD" });
    expect(newState).toEqual({ good: 1, ok: 0, bad: 0 });
  });

  test("should incremented ok rate", () => {
    const state = initState;
    deepFreeze(state);

    const newState = rateReducer(state, { type: "OK" });
    expect(newState).toEqual({ good: 0, ok: 1, bad: 0 });
  });

  test("should incremented bad rate", () => {
    const state = initState;
    deepFreeze(state);

    const newState = rateReducer(state, { type: "BAD" });
    expect(newState).toEqual({ good: 0, ok: 0, bad: 1 });
  });

  test("should reset rates to zero", () => {
    const state = initState;
    deepFreeze(state);

    const newState = rateReducer(state, { type: "ZERO" });
    expect(newState).toEqual({ good: 0, ok: 0, bad: 0 });
  });
});
