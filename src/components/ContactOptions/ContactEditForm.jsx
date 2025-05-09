import React, { useState, useEffect } from "react";
import "./ContactEditForm.css"


export const ContactEditForm = ({ onClose, valueAddress, onSave }) => {

    const [address, setAddress ] = useState("");

    useEffect(() => {
        setAddress(valueAddress);
    }, [valueAddress]);

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Guardando dirección:", address);
        onSave(address);
        onClose();
    }

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
                                    <form onSubmit={handleSave}>  {/* onSubmit={manejarEnvio} */}
                                        <div className="boxInput">
                                            <label><strong>Full Name:</strong></label>
                                            <input className="inputStyle" type="text"  /> {/*required*/}
                                        </div>
                                        <div className="boxInput">
                                            <label><strong>Email:</strong></label>
                                            <input className="inputStyle" type="text"  />
                                        </div>
                                        <div className="boxInput">
                                            <label><strong>Phone:</strong></label>
                                            <input className="inputStyle" type="number" step={1}  /> {/*required*/}
                                        </div>
                                        <div className="boxInput">
                                            <label><strong>Address:</strong></label>
                                            <input className="inputStyle" type="text" value={address} onChange={(e) => setAddress(e.target.value)}  />
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


//Solo son obligatorios los <Input> de Nombre y Numero telefonico ya que son los datos indispensables y los demas opcionales