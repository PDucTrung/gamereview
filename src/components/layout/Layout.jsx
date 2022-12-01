import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  loadgames,
  selectGamesStatus,
} from "../../store/features/product/product.slice";
import HeadingHeader from "../Header/HeadingHeader";
import LoadAnimation from "../load/LoadAnimation";

const Layout = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectGamesStatus);

  useEffect(() => {
    dispatch(loadgames());
  }, []);
  return (
    <main className="app">
      {loading ? (
        <LoadAnimation></LoadAnimation>
      ) : (
        <div>
          <header>
            <HeadingHeader></HeadingHeader>
          </header>
          <Outlet />
          <ToastContainer></ToastContainer>
        </div>
      )}
    </main>
  );
};

export default Layout;
