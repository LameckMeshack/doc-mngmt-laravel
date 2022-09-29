import axios from "axios";
import { useEffect, useState } from "react";

function Register() {
    const [departments, setDepartments] = useState([]);
    const [roles, setRoles] = useState([]);
    const [userRegDetails, setuserRegDetails] = useState({
        name: "",
        email: "",
        password: "",
        // password_confirmation: "",
        department: "",
        role: "",
        phone: "",
        photo: "",
    });
    // handle register
    const handleRegister = (e) => {
        e.preventDefault();
        axios
            .post("/api/register", userRegDetails)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
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
                console.log(response.data);
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

    console.log(userRegDetails);

    return (
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
                        <label htmlFor="phone">Photo</label> <br />
                        <input
                            type="file"
                            onChange={(e) =>
                                setuserRegDetails({
                                    ...userRegDetails,
                                    phone: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group">
                        <label htmlFor="department">Department</label> <br />
                        <select
                            name="department"
                            id="department"
                            onChange={(e) =>
                                setuserRegDetails({
                                    ...userRegDetails,
                                    department: e.target.value,
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
                            name="role"
                            id="role"
                            onChange={(e) =>
                                setuserRegDetails({
                                    ...userRegDetails,
                                    role: e.target.value,
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
    );
}

export default Register;
