import React from "react";


export const ConfirmDeletion = ({ onClose, onDelete }) => {
    return (
        <>
            <div className="modal show d-block bg-black bg-opacity-50" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h2>Confirm to Delete?.</h2>
                        </div>
                        <div className="modal-footer">
                            <button onClick={onDelete} type="button" className="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
                            <button onClick={onClose} type="button" className="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};