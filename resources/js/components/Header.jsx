import React from "react";
import { Link, Outlet } from "react-router-dom";
import Login from "./Login";

const Header = () => (
    <>
        <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Document management
                </Link>
                <Link to="login">Login</Link>
                <Link to="register">Register</Link>
            </div>
        </nav>
    </>
);

export default Header;
