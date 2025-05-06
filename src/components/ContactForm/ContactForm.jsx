import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../ContactContext";
import { Link } from "react-router-dom";
import "./ContactForm.css"

export const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [photo, setPhoto] = useState("");

    const navigate = useNavigate();
    const { addContact } = useContext(ContactContext);


    const manejarEnvio = (e) => { //Cambiar a ingles
        e.preventDefault();

        const newContact = {
            name,
            email,
            phone,
            address,
            photo,
            id: Date.now()
        };

        addContact(newContact);
        alert("Contact Created")
        navigate("/contacts")
    };

    return (
        <>
            <div className="container">
                <div className="titleZone"> {/* Title Zone */}
                    <h1>Add a new contact</h1>
                </div>
                <div> {/* Form Zone */}
                    <form onSubmit={manejarEnvio}>
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
                        {/* ///// */}
                        <div className="boxInput">
                            <label><strong>Photo:</strong></label>
                            <input className="inputStyle" type="file" accept="image/*" onChange={(e) => {const file =e.target.files[0];
                                                                                                        if (file) {
                                                                                                            const reader = new FileReader();
                                                                                                            reader.onloadend = () => {
                                                                                                                setPhoto(reader.result);
                                                                                                            };
                                                                                                            reader.readAsDataURL(file);
                                                                                                        }
                                                                                                        }} />
                        </div>
                        {/* ///// */}
                        <div>
                            <button type="submit" className="buttonStyle">Create</button>
                        </div>
                    </form>
                </div>
                <div> {/* Back Button */}
                    <Link to="/contacts">
                        Get back to contacts
                    </Link>
                </div>
            </div>
        </>
    );
};