import React, { useState, useEffect } from "react";
import "./ContactEditForm.css"


export const ContactEditForm = ({ onClose, valuePhoto, valueName, valueEmail, valuePhone, valueAddress, onSave }) => {

    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        setPhoto(valuePhoto);
        setName(valueName);
        setEmail(valueEmail);
        setPhone(valuePhone);
        setAddress(valueAddress);
    }, [valueName, valueAddress]);

    const handleSave = (e) => {
        e.preventDefault();
        onSave({ photo, name, email, phone, address });
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
                                    <form onSubmit={handleSave}>
                                        <div>
                                            <div className="container text-center">
                                                <img src={photo} className="photoEdit" />  {/* PENDIENTE IMAGEN*/}
                                            </div>
                                        <div className="boxInput">
                                            <label><strong>Full Name:</strong></label>
                                            <input className="inputStyle" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                                        </div>
                                        <div className="boxInput">
                                            <label><strong>Email:</strong></label>
                                            <input className="inputStyle" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="boxInput">
                                            <label><strong>Phone:</strong></label>
                                            <input className="inputStyle" type="number" step={1} value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                        </div>
                                        <div className="boxInput">
                                            <label><strong>Address:</strong></label>
                                            <input className="inputStyle" type="text" value={address} onChange={(e) => setAddress(e.target.value)}  />
                                        </div>
                                        <div>
                                            <button type="submit" className="buttonStyle">Edit Complete</button>
                                        </div>
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