import axios from "axios";

function Login() {
    // fetch data using axios
    axios
        .get("/api/users/1")
        .then((response) => {
            // handle success
            console.log(response);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .then(() => {
            // always executed
        });

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
