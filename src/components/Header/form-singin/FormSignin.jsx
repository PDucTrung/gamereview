import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  checkLogin,
  selectUsers,
} from "../../../store/features/auth/auth.slice";

const FormSignin = ({ handleCloseIn, handleShowUp }) => {
  const dispatch = useDispatch();
  const { users } = useSelector(selectUsers);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (e) => {
    const userlogin = users.filter(
      (user) => user.email == e.emailSignin && user.pass == e.passwordSignin
    );
    if (userlogin.length < 1) {
      toast.error("Tài khoản hoặc mật khẩu không chính xác", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(checkLogin({ isLogin: true }));
      handleCloseIn();
      toast(" 🦄 wellcome tfruit! ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <form
      action=""
      method="POST"
      className="form"
      id="form-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="heading font-mali">SIGN IN</p>
      <div className="spacer" />
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email3"
          type="text"
          placeholder="VD: email@domain.com"
          className="form-control"
          {...register("emailSignin", {
            required: "Please enter this field!",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "This field must be email!",
            },
          })}
        />
        {errors.emailSignin && (
          <span className="form-message text-red">
            {errors.emailSignin.message}
          </span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          name="password3"
          type="password"
          placeholder="Enter your password"
          className="form-control"
          {...register("passwordSignin", {
            required: "Please enter this field!",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
              message:
                "Password must consist of at least 8 letters and contain at least one uppercase letter, one lowercase letter and one number.",
            },
          })}
        />
        {errors.passwordSignin && (
          <span className="form-message text-red">
            {errors.passwordSignin.message}
          </span>
        )}
      </div>
      <a href="#" className="link">
        Forward your password ?
      </a>
      <button className="form-submit" id="sign-in">
        Sign in
      </button>
      <p>
        Do you have an account?{" "}
        <span className="reg" id="regBtn" onClick={handleShowUp}>
          Register now
        </span>
      </p>
      <p className="text-center text-black">OR</p>
      <div className="loginWith d-flex justify-content-between">
        <i className="icon bi bi-facebook" />
        <i className="icon bi bi-google" />
      </div>
    </form>
  );
};

export default FormSignin;
