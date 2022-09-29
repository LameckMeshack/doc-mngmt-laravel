import axios from "axios";
import { useState } from "react";

function Login() {
    const [loginData, setloginData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        axios
            .post("/api/user-login", loginData)
            .then((res) => {
                console.log(res);
                if (res.data.status === 200) {
                    console.log(res.data.message);
                } else {
                    setError(res.data.message);
                }
            })
            .catch((err) => {
                setError(err.response.data.message);
                console.log(error);
            });
    };

    if (error) {
        alert(error);
    }

    //success message if login successful

    return (
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
    );
}

export default Login;
