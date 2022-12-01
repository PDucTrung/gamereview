import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/features/auth/auth.slice";
import { toast } from "react-toastify";

const FormSignup = ({ handleCloseUp }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    if (e.passSignup !== e.repassSignup) {
      toast.error("Password and re-password phải giống nhau", {
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
      dispatch(
        addUser({
          name: e.fullnameSignup,
          email: e.emailSignup,
          pass: e.passSignup,
          islogin: false,
        })
      );

      handleCloseUp();
    }
  };
  return (
    <form
      action=""
      method="POST"
      className="form"
      id="form-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="heading font-mali">Sign up</h3>
      <div className="spacer" />
      <div className="form-group">
        <label htmlFor="fullname" className="form-label font-poppins">
          Full name
        </label>
        <input
          id="fullname"
          name="fullname2"
          type="text"
          placeholder="VD: sunsan"
          className="form-control"
          {...register("fullnameSignup", { required: true })}
        />
        {errors.fullnameSignup && (
          <span className="form-message text-red">This field is required</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email2"
          type="text"
          placeholder="VD: email@domain.com"
          className="form-control"
          {...register("emailSignup", {
            required: "Please enter this field!",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "This field must be email!",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="emailSignup"
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <span className="form-message text-red" key={type}>
                    {message}
                  </span>
                ))
              : null;
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          name="password2"
          type="password"
          placeholder="Enter your password"
          className="form-control"
          {...register("passSignup", {
            required: "Please enter this field!",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
              message:
                "Password must consist of at least 8 letters and contain at least one uppercase letter, one lowercase letter and one number.",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="passSignup"
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <span className="form-message text-red" key={type}>
                    {message}
                  </span>
                ))
              : null;
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password_confirmation" className="form-label">
          Re-enter Password
        </label>
        <input
          id="password_confirmation"
          name="password_confirmation"
          placeholder="Confirm password"
          type="password"
          className="form-control"
          {...register("repassSignup", {
            required: "Please enter this field!",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
              message:
                "Password must consist of at least 8 letters and contain at least one uppercase letter, one lowercase letter and one number.",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="repassSignup"
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <span className="form-message text-red" key={type}>
                    {message}
                  </span>
                ))
              : null;
          }}
        />
      </div>
      <button className="form-submit" id="sign-up">
        Sign up
      </button>
      <p className="text-center text-black">OR</p>
      <div className="loginWith d-flex justify-content-between">
        <i className="icon bi bi-facebook" />
        <i className="icon bi bi-google" />
      </div>
    </form>
  );
};

export default FormSignup;
