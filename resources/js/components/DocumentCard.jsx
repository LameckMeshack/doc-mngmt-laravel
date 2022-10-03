import { FcFile } from "react-icons/fc";
function DocumentCard() {
    return (
        <div className="document-card">
            <div className="document-card-left">
                <FcFile className="document-card-left-icon" />
            </div>
            <div className="document-card-right">
                <h5>Document Name</h5>
                <small>Document Acess</small>
                <small> department</small>
            </div>
        </div>
    );
}

export default DocumentCard;
