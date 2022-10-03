import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDocuments } from "../store/actions/documentActions";
import DocumentCard from "./DocumentCard";
import { saveAs } from "file-saver";

function SpecificDeptCardContainer() {
    const { documents } = useSelector((state) => state.documents);
    //filter documents by whwre the department id is equal to the department id in the url
    const departmentId = useParams().id;
    console.log(departmentId);
    const filteredDocuments = documents.filter(
        (document) => document.department.id === parseInt(departmentId)
    );

    // get the department name through the department id in the url
    // const { departments } = useSelector((state) => state.departments);
    // const department = departments.find(
    //     (department) => department.id === parseInt(departmentId)
    // );
    // console.log(department);
    // const departmentName = department.id;

    const dispacth = useDispatch();
    useEffect(() => {
        dispacth(getDocuments());
    }, [dispacth]);

    const saveFile = () => {
        // saveAs(`public/uploads/documents/${document.file}`, document.name);
    };

    return (
        //    if filterfDocuments is empty return a message else return the filtered documents
        <div className="container">
            {filteredDocuments.length === 0 ? (
                <h1>No documents found </h1>
            ) : (
                <div>
                    <div className="document-card-container">
                        <h1>Files </h1>
                        <div className="cards-container">
                            {filteredDocuments.map((doc) => (
                                <DocumentCard
                                    key={doc.id}
                                    name={doc.name}
                                    access={doc.access}
                                    department={doc.department.name}
                                />
                            ))}
                            <button
                                onClick={(e) =>
                                    saveAs(
                                        `public/uploads/documents/1664826981.docx`,
                                        "Trial1.docx"
                                    )
                                }
                            >
                                download
                            </button>
                            {/* //download button */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SpecificDeptCardContainer;
