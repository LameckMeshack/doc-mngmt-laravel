import axios from "axios";
import { useEffect, useState } from "react";

function Register() {
    const [userRegDetails, setuserRegDetails] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        department: "",
        role: "",
        phone: "",
        photo: "",
    });
    const [departments, setDepartments] = useState([]);
    const [roles, setRoles] = useState([]);
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

    return (
        <div className="register">
            <form action=" ">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="Confirm password">Confirm Password</label>
                    <input type="password" placeholder=" Confirm password" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" placeholder="name" />
                </div>
                {/* form group for select */}
                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option value="">Select Department</option>
                        {departments.map((department) => (
                            <option value={department.id}>
                                {department.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select name="role" id="role">
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                            <option value={role.id}>{role.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="photo">Photo</label>
                    <input type="file" placeholder="name" />
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
