import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { createDocument } from "../store/actions/documentActions";

function UploadFile() {
    const dispatch = useDispatch();
    const [types, setTypes] = useState([]);
    const [departments, setDepartments] = useState([]);

    const user = useSelector((state) => state.userInfo.userInfo.user.id);

    // console.log(user);
    const [documentDetails, setDocumentDetails] = useState({
        name: "",
        access: "",
        description: "",
        department_id: "",
        user_id: user,
        type_id: "",
        file: null,
    });
    //getting user from the context
    // const { user } = useContext(AuthContext);
    // console.log("user");
    // console.log(user.user?.name);
    // get user from the store

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
    const fetchTypes = () => {
        axios
            .get("/api/types")
            .then((response) => {
                // handle success
                // console.log(response.data);
                setTypes(response.data);
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
        fetchTypes();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", documentDetails.file);
        formData.append("name", documentDetails.name);
        formData.append("access", documentDetails.access);
        formData.append("description", documentDetails.description);
        formData.append("user_id", documentDetails.user_id);
        formData.append("department_id", documentDetails.department_id);
        formData.append("type_id", documentDetails.type_id);
        // dispatching redux  create document action
        dispatch(createDocument(formData));
        console.log(documentDetails);
        //clearForm
        clearForm();
    };
    const clearForm = () => {
        setDocumentDetails({
            name: "",
            access: "",
            description: "",
            department_id: "",
            user_id: user,
            type_id: "",
            file: "",
        });
    };

    useEffect(() => {}, []);
    return (
        <>
            <div className="container">
                <h1>Upload Document</h1>
                <form onSubmit={handleSubmit} action=" ">
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label> <br />
                            <input
                                type="text"
                                required
                                value={documentDetails.name}
                                placeholder="Document Name"
                                onChange={(e) =>
                                    setDocumentDetails({
                                        ...documentDetails,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="access">Access</label> <br />
                            <select
                                name="access"
                                id="access"
                                value={documentDetails.access}
                                required
                                onChange={(e) =>
                                    setDocumentDetails({
                                        ...documentDetails,
                                        access: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select Access</option>>{" "}
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="password">Description</label> <br />
                            <textarea
                                name="description"
                                id="description"
                                required
                                value={documentDetails.description}
                                cols="30"
                                rows="10"
                                placeholder="Enter the files accurate description"
                                onChange={(e) =>
                                    setDocumentDetails({
                                        ...documentDetails,
                                        description: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group see">
                            <label htmlFor="document">Document</label> <br />
                            <input
                                type="file"
                                // value={documentDetails.file}
                                onChange={(e) =>
                                    setDocumentDetails({
                                        ...documentDetails,
                                        file: e.target.files[0],
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
                                value={documentDetails.department_id}
                                onChange={(e) =>
                                    setDocumentDetails({
                                        ...documentDetails,
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
                            <label htmlFor="type">Type</label> <br />
                            <select
                                name="type_id"
                                id="type_id"
                                value={documentDetails.type_id}
                                onChange={(e) =>
                                    setDocumentDetails({
                                        ...documentDetails,
                                        type_id: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select Type</option>
                                {types.map((type) => (
                                    <option key={type.id} value={type.id}>
                                        {type.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn" type="submit">
                            Upload
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UploadFile;
