import { getAuthUserData } from "./auth-reducer";

const INITILIAZED_SUCCESSED = "INITILIAZED_SUCCESSED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITILIAZED_SUCCESSED:
      return { ...state, initialized: true };
  }
  return state;
};

export const initializedSuccess = () => ({
  type: INITILIAZED_SUCCESSED,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
