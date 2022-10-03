import axios from "axios";
import { useEffect, useState } from "react";

function Register() {
    const [departments, setDepartments] = useState([]);
    const [roles, setRoles] = useState([]);
    const [error, setError] = useState("");
    const [userRegDetails, setuserRegDetails] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        department_id: "",
        role_id: "",
        phone: "",
        photo: "",
    });
    // handle register
    const handleRegister = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("photo", userRegDetails.photo);
        formData.append("name", userRegDetails.name);
        formData.append("email", userRegDetails.email);
        formData.append("password", userRegDetails.password);
        formData.append(
            "password_confirmation",
            userRegDetails.password_confirmation
        );
        formData.append("department_id", userRegDetails.department_id);
        formData.append("role_id", userRegDetails.role_id);
        formData.append("phone", userRegDetails.phone);
        console.log(formData);

        axios
            .post("/api/register", formData)
            .then((res) => {
                console.log(res);
                if (res.data.status === 200) {
                    console.log(res.data.message);
                } else {
                    setError(res.data.message);
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                setError(err.response.data.message);
                console.log("error", err.response.data);
            });
    };

    //fetch department
    const fetchDepartments = () => {
        axios
            .get("/api/departments")
            .then((response) => {
                // handle success
                setDepartments(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    };
    const fetctRoles = () => {
        axios
            .get("/api/roles")
            .then((response) => {
                // handle success
                // console.log(response.data);
                setRoles(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    };

    useEffect(() => {
        fetchDepartments();
        fetctRoles();
    }, []);

    // console.log(userRegDetails);

    return (
        <div className="container">
            <h3>Register</h3>
            <div className="register">
                <form onSubmit={handleRegister} action=" ">
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label> <br />
                            <input
                                type="text"
                                placeholder="Firstname Lastname"
                                onChange={(e) =>
                                    setuserRegDetails({
                                        ...userRegDetails,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label> <br />
                            <input
                                type="text"
                                placeholder="email@example.com"
                                onChange={(e) =>
                                    setuserRegDetails({
                                        ...userRegDetails,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="password">Password</label> <br />
                            <input
                                type="password"
                                placeholder="password"
                                onChange={(e) =>
                                    setuserRegDetails({
                                        ...userRegDetails,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Confirm password">
                                Confirm Password
                            </label>{" "}
                            <br />
                            <input
                                type="password"
                                placeholder=" Confirm password"
                                onChange={(e) =>
                                    setuserRegDetails({
                                        ...userRegDetails,
                                        password_confirmation: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label> <br />
                            <input
                                type="tel"
                                placeholder="07****"
                                onChange={(e) =>
                                    setuserRegDetails({
                                        ...userRegDetails,
                                        phone: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group see">
                            <label htmlFor="photo">Photo</label> <br />
                            <input
                                type="file"
                                onChange={(e) =>
                                    // handling file
                                    setuserRegDetails({
                                        ...userRegDetails,
                                        photo: e.target.files[0],
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="department">Department</label>{" "}
                            <br />
                            <select
                                name="department_id"
                                id="department_id"
                                onChange={(e) =>
                                    setuserRegDetails({
                                        ...userRegDetails,
                                        department_id: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select Department</option>
                                {departments.map((department) => (
                                    <option
                                        key={department.id}
                                        value={department.id}
                                    >
                                        {department.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label> <br />
                            <select
                                name="role_id"
                                id="role_id"
                                onChange={(e) =>
                                    setuserRegDetails({
                                        ...userRegDetails,
                                        role_id: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select Role</option>
                                {roles.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn" type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
