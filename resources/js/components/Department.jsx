import { useEffect } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDepartments } from "../store/actions/departmentActions";

function Departments() {
    const departments = useSelector((state) => state.departments.departments);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDepartments());
    }, []);

    return (
        <div className="departments">
            <h1>Available Departments</h1>
            <div className="departments-container">
                {departments.map((department) => (
                    <Link
                        to={`/department/${department.id}`}
                        key={department.id}
                    >
                        <div key={department.id} className="department-folder">
                            <FcOpenedFolder className="department-folder-icon" />
                            <h5>{department.name}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Departments;
