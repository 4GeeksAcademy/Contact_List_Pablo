import React from "react";
import "./ContactEditForm.css"


export const ContactEditForm = ({ onClose }) => {

    return (
        <>
            <div className="modal show d-block bg-black bg-opacity-50" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={onClose} className="btn-close" aria-label="close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="titleZone"> {/* Title Zone */}
                                    <h1>Edit Contact</h1>
                                </div>
                                <div> {/* Form Zone */}
                                    <form>  {/* onSubmit={manejarEnvio} */}
                                        <div className="boxInput">
                                            <label><strong>Full Name:</strong></label>
                                            <input className="inputStyle" type="text"  required />
                                        </div>
                                        <div className="boxInput">
                                            <label><strong>Email:</strong></label>
                                            <input className="inputStyle" type="text"  />
                                        </div>
                                        <div className="boxInput">
                                            <label><strong>Phone:</strong></label>
                                            <input className="inputStyle" type="number" step={1}  required />
                                        </div>
                                        <div className="boxInput">
                                            <label><strong>Address:</strong></label>
                                            <input className="inputStyle" type="text"  />
                                        </div>
                                        <div>
                                            <button type="submit" className="buttonStyle">Edit Complete</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};