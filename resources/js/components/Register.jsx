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
        <div className="center-item">
            <form>
                <input type="text" placeholder="Enter username" />
                <input type="email" placeholder="Enter email" />
                <input type="password" placeholder="Enter password" />
                <input type="password" placeholder="Confirm password" />
                <input type="text" placeholder="phone" />
                <input type="file" />

                <select placeholder="Select Roles">
                    {roles.map((role) => (
                        <option value={role.id}>{role.name}</option>
                    ))}
                </select>

                <select placeholder="Select Department">
                    {departments.map((department) => (
                        <option value={department.id}>{department.name}</option>
                    ))}
                </select>

                <button type="button">Register</button>
                <p>
                    Have an Account ?<a href="#">Login!</a>
                </p>
            </form>
        </div>
    );
}

export default Register;
