import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navigation">
            <NavLink to="/" className="brand-name">
                CYTONN DOCUMENT MANAGEMENT SYSTEM
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
                <ul>
                    <li>
                        <NavLink to="home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="register">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
