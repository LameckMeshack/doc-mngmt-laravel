import axios from "axios";

function Login() {
    // fetch data using axios

    return (
        <div className="center-item">
            <form>
                <input type="text" placeholder="Enter username" />
                <input type="password" placeholder="Enter password" />
                <button type="button">Login</button>
                <p>
                    Not Registered ?<a href="#">Create account Now!</a>
                </p>
            </form>
        </div>
    );
}

export default Login;
