import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  loadgames,
  selectGamesStatus,
} from "../../store/features/product/product.slice";
import HeadingHeader from "../Header/HeadingHeader";

const Layout = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectGamesStatus);

  useEffect(() => {
    dispatch(loadgames());
  }, []);
  return (
    <main className="app">
      {loading ? (
        <div className="d-flex gap-3 align-items-center">
          <div className="spinner-grow" role="status"></div>
          <div>Loading</div>
        </div>
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
