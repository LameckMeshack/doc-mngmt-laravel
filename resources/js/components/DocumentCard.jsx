import React from "react";
import { FcFile } from "react-icons/fc";
function DocumentCard({ name, access, department }) {
    return (
        <div className="document-card">
            <div className="document-card-left">
                <FcFile className="document-card-left-icon" />
            </div>
            <div className="document-card-right">
                <h5>{name}</h5>
                <small>{access}</small>
                <small> {department}</small>
            </div>
        </div>
    );
}

export default DocumentCard;
