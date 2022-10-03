import { FcOpenedFolder } from "react-icons/fc";

function Departments() {
    return (
        <div className="departments">
            <h1>Available Departments</h1>
            <div className="departments-container">
                <div className="department-folder">
                    <FcOpenedFolder className="department-folder-icon" />
                    <h5>Department</h5>
                </div>

                <div className="department-folder">
                    <FcOpenedFolder className="department-folder-icon" />
                    <h5>Department</h5>
                </div>

                <div className="department-folder">
                    <FcOpenedFolder className="department-folder-icon" />
                    <h5>Department</h5>
                </div>
            </div>
        </div>
    );
}

export default Departments;
