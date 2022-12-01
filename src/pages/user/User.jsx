import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../store/features/auth/auth.slice";

const User = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <button
        className="btn"
        onClick={() => dispatch(checkLogin({ isLogin: false }))}
      >
        Log out
      </button>
    </Container>
  );
};

export default User;
