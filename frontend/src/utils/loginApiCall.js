import api from "./api";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    const res = await api.post("/auth/login", userCredentials, {
      withCredentials: true,
      credentials: "include",
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    console.log(err.response.data);
  }
};
