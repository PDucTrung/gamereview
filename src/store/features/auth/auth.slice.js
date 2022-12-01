import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const initialState = [];

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, { payload: { name, email, pass, islogin } }) => {
      const userEmail = state.findIndex((item) => item.email == email);
      if (userEmail !== -1) {
        toast.error("Email đã tồn tại", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        Swal.fire("Sign Up success!", "", "success");
        return [...state, { name, email, pass, islogin }];
      }
    },
  },
});

export const authReducer = authSlice.reducer;
export const { addUser } = authSlice.actions;
export const selectUsers = (state) => {
  const users = state.auth;
  return {
    users,
  };
};
