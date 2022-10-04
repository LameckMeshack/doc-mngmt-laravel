import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../store/actions/authActions";

export default function Navbar() {
    const dispatch = useDispatch();
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    //get user from the context
    const { user } = useContext(AuthContext);

    return (
        <nav className="navigation">
            <NavLink to="/" className="brand-name">
                <h4> DOCUMENT MANAGEMENT</h4>
            </NavLink>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <GiHamburgerMenu />
            </button>
            <div
                className={
                    isNavExpanded
                        ? "navigation-menu expanded"
                        : "navigation-menu"
                }
            >
                {/* if user exists, show the following links else show the login links */}
                {user?.user ? (
                    <ul>
                        <li>
                            <NavLink className="a" to="documents">
                                Documents
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="a" to="upload">
                                Create File
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="a" to="departments">
                                Dept and
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="a" onClick={dispatch(logout)}>
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <NavLink
                                // onClick={setIsNavExpanded(!isNavExpanded)}
                                className="a"
                                to="login"
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="a" to="register">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
