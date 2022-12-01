import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import store from "./store/store";
import Layout from "./components/layout/Layout";
import Detail from "./pages/detail/Detail";
import Favorite from "./pages/favorite/Favorite";

const routes = createRoutesFromElements(
  <Route
    element={<Layout></Layout>}
    errorElement={<div>Some thing wrong :(</div>}
  >
    <Route path="/" element={<Home></Home>}></Route>
    <Route
      path="/detail/:gameId"
      element={<Detail />}
      errorElement={<div>Something wrong :(</div>}
    />
    <Route path="/favorite" element={<Favorite />} />
    <Route path="*" element={<div>Page Not Found</div>} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
