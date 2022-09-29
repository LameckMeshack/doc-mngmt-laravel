import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Login from "./Login";

const Header = () => (
    <>
        <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Laravel
                </NavLink>
                <div>
                    {/* Left Side Of Navbar */}
                    <ul className="navbar-main">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
);

export default Header;
