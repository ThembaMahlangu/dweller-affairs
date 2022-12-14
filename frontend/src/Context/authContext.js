import { createContext, useEffect, useReducer } from "react";
import authReducer from "../reducers/authReducer.js";

export const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")),
  isLoading: false,
  error: false,
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.err,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
