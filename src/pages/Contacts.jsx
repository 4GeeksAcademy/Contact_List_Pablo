import React from "react";
import { ContactsRendering } from "../components/ContactRendering/ContactsRendering";
import { Link } from "react-router-dom";

export const Contacts = () => {
    return (
        <>
            <div className="container">
                <div className="text-end mt-5"> {/* Zona boton que enviar al formulario */}
                    <Link to="/form">
                        <button className="bg-success text-light border-0 rounded-2">Add new contact</button>
                    </Link>
                </div>
                <div> {/* Zona para los contactos agregados */}
                    < ContactsRendering />
                </div>
            </div>
        </>
    );
};