import React, { useState, useEffect, useRef } from "react";
import "./ContactEditForm.css"


export const ContactEditForm = ({ onClose, valueName, valueEmail, valuePhone, valueAddress, valuePhoto, onSave }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [photo, setPhoto] = useState("");

    const imgEdit = useRef(null);

    useEffect(() => {
        setName(valueName);
        setEmail(valueEmail);
        setPhone(valuePhone);
        setAddress(valueAddress);
        setPhoto(valuePhoto);
    }, [valueName, valueEmail, valuePhone, valueAddress, valuePhoto]);

    const handleSave = (e) => {
        e.preventDefault();
        onSave({ name, email, phone, address, photo });
        onClose();
    };

    const handleImg = () => {
        imgEdit.current.click();
    }; //Antiguamente para cambiar imagen con un Click pero lo quite y deje en un <input>

    const handleImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
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
                                                <img src={photo || "https://cdn-icons-png.flaticon.com/512/1199/1199663.png"}
                                                    className="photoEdit"
                                                />
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
                                                <input className="inputStyle" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                                            </div>
                                            <div className="boxInput">
                                                <label><strong>Photo</strong></label>
                                                <input className="inputStyle" type="file" accept="image/*" ref={imgEdit} onChange={handleImgChange} />
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