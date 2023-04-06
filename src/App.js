import React, { lazy, Suspense } from "react";
import {  Routes, Route, HashRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";
import MyErrorBoundary from "./components/MyErrorBoundary/MyErrorBoundary";
import Login from "./components/Login/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import DashBoard from "./components/DashBoard/Dashboard";
import { logout } from "./Redux/Action/Action";
const About = lazy(() => import("./components/About/About"));
const Home = lazy(() => import("./components/Home/Home"));

const App = () => {
  const { token } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear("Token");
    dispatch(logout);
  };

  return (
    <ErrorBoundary fallback={<MyErrorBoundary />}>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <nav className="container">
              {token && (
                <NavLink to="/Home" className="item">
                  Home
                </NavLink>
              )}
              {token && (
                <NavLink to="/about" className="item">
                  about
                </NavLink>
              )}
              {token && (
                <NavLink to="/dashboard" className="item">
                  dashboard
                </NavLink>
              )}
              {token && (
                <NavLink className="item" onClick={() => handleLogout()}>
                  logout
                </NavLink>
              )}
              {!token && (
                <NavLink to="/sign-up" className="item">
                  Sign Up
                </NavLink>
              )}
              {!token && (
                <NavLink to="/login" className="item">
                  login
                </NavLink>
              )}
            </nav>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/dashboard" element={<DashBoard />} />
                <Route exact path="/Home" element={<Home />} />
              </Route>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </Suspense>
      </HashRouter>
    </ErrorBoundary>
  );
};

export default App;
