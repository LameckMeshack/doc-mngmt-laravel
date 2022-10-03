import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/actions/authActions";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setloginData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(loginData.email, loginData.password));
        navigate("/");
        // reload
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <div className="login">
                <form onSubmit={handleLogin} className="">
                    <div className="form-group">
                        <label htmlFor="email" required>
                            Email
                        </label>
                        <br />
                        <input
                            type="text"
                            placeholder="name"
                            onChange={(e) =>
                                setloginData({
                                    ...loginData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label> <br />
                        <input
                            type="password"
                            required
                            placeholder="password"
                            // setOnchange
                            onChange={(e) =>
                                setloginData({
                                    ...loginData,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
