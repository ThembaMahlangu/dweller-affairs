const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isLoading: true,
        err: false,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
