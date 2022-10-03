import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments } from "../store/actions/documentActions";
import DocumentCard from "./DocumentCard";

function DocumentCardContainer() {
    const { documents } = useSelector((state) => state.documents);
    // console.log(documents);

    const dispacth = useDispatch();
    useEffect(() => {
        dispacth(getDocuments());
    }, [dispacth]);
    return (
        <div className="document-card-container">
            <h1>Document Card Container</h1>
            <div className="cards-container">
                {documents.map((document) => (
                    <DocumentCard
                        key={document.id}
                        name={document.name}
                        access={document.access}
                        department={document.department.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default DocumentCardContainer;
