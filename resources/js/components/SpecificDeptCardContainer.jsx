import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDocuments } from "../store/actions/documentActions";
import DocumentCard from "./DocumentCard";

function SpecificDeptCardContainer() {
    const { documents } = useSelector((state) => state.documents);
    //filter documents by whwre the department id is equal to the department id in the url
    const departmentId = useParams().id;
    console.log(departmentId);
    const filteredDocuments = documents.filter(
        (document) => document.department.id === parseInt(departmentId)
    );

    const dispacth = useDispatch();
    useEffect(() => {
        dispacth(getDocuments());
    }, [dispacth]);
    return (
        //    if filterfDocuments is empty return a message else return the filtered documents
        <div className="container">
            {filteredDocuments.length === 0 ? (
                <h1>No documents found</h1>
            ) : (
                <div>
                    <div className="document-card-container">
                        <h1>Files</h1>
                        <div className="cards-container">
                            {filteredDocuments.map((document) => (
                                <DocumentCard
                                    key={document.id}
                                    name={document.name}
                                    access={document.access}
                                    department={document.department.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SpecificDeptCardContainer;
