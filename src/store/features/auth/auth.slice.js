import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const initialState = { data: [], login: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, { payload: { name, email, pass, isAdmin } }) => {
      const userEmail = state.data.findIndex((item) => item.email == email);
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
        return [...state.data, { name, email, pass, isAdmin }];
      }
    },
    checkLogin: (isLogin) => {
      if (isLogin) {
        return {
          login: true,
        };
      } else {
        return {
          login: false,
        };
      }
    },
  },
});

export const authReducer = authSlice.reducer;
export const { addUser, checkLogin } = authSlice.actions;
export const selectUsers = (state) => {
  const users = state.auth;
  return {
    users,
  };
};

export const selectUserStatus = (state) => state.auth.login;
