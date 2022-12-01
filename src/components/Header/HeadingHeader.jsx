import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { selectTotalfavoriteItem } from "../../store/features/favorite/favorite.slice";
import "./HeadingHeader.css";
import FormSignup from "./form-signup/FormSignup";
import FormSignin from "./form-singin/FormSignin";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/features/auth/auth.slice";

const HeadingHeader = () => {
  const { users } = useSelector(selectUsers);
  console.log(users);
  const [login, setLogin] = useState(false);
  const [showIn, setShowIn] = useState(false);
  const [showUp, setShowUp] = useState(false);

  // sigin
  const handleCloseIn = () => {
    setShowIn(false);
    setShowUp(false);
  };
  const handleShowIn = () => {
    setShowIn(true);
    setShowUp(false);
  };

  // signup
  const handleCloseUp = () => {
    setShowUp(false);
    setShowIn(false);
  };
  const handleShowUp = () => {
    setShowUp(true);
    setShowIn(false);
  };
  const totalItem = useSelector(selectTotalfavoriteItem);
  return (
    <div className="heading-header d-flex justify-content-between align-items-center bg-dark">
      <NavLink className="logo" to={"/"}>
        <img src="./assets/warlord-helmet.png" alt="" />
      </NavLink>
      <div className="d-flex gap-3 align-items-center">
        {login ? (
          <NavLink className="text-white user text-decoration-none">
            <i className="bi bi-person-circle"></i>
          </NavLink>
        ) : (
          <div className="d-flex gap-3">
            <div className="signin">
              <div onClick={handleShowIn}>SIGN IN</div>
              <Modal show={showIn} onHide={handleCloseIn}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <FormSignin
                    handleCloseIn={handleCloseIn}
                    handleShowUp={handleShowUp}
                  ></FormSignin>
                </Modal.Body>
              </Modal>
            </div>
            <div className="signup">
              <div onClick={handleShowUp}>SIGN UP</div>
              <Modal show={showUp} onHide={handleCloseUp}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <FormSignup handleCloseUp={handleCloseUp}></FormSignup>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        )}
        <NavLink
          className="favorite-cart text-white position-relative"
          to={"/favorite"}
        >
          <i className="bi bi-bookmark-heart"></i>
          <span className="number position-absolute">{totalItem}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default HeadingHeader;
