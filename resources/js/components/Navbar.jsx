import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
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
                <h3>CYTONN DOCUMENT MANAGEMENT SYSTEM</h3>
            </NavLink>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                {/* hamburger svg code... */}
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
                            <NavLink to="documents">Documents</NavLink>
                        </li>
                        <li>
                            <NavLink to="departments">Departments</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={dispatch(logout)}>Logout</NavLink>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <NavLink to="login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="register">Register</NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
