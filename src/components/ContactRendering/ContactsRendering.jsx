import React, { useContext, useState } from "react";
import { ContactContext } from "../ContactContext";
import { ContactEditForm } from "../ContactOptions/ContactEditForm";
import { ConfirmDeletion } from "../ContactOptions/ConfirmDeletion";
import "./ContactsRendering.css"


export const ContactsRendering = () => {

    const { contacts, deleteContact } = useContext(ContactContext); /// Borrar setContacts

    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const [contactToDelete, setContactToDelete] = useState(null);

    const handleEdit = () => { //Abre Modal Editar contacto
        setShowModalEdit(true);
    }

    const handleShowModal = () => { //Abre modal para borrar contacto
        setShowModalDelete(true);
    };

    const handleCloseModal = () => { // Cierra Modals
        setShowModalDelete(false);
        setShowModalEdit(false);
    };

    return (
        <>
            {contacts.map((contact, index) => (
                <div key={index} className="boxContact container row">
                    <div className="col-2"> {/* Photo Zone */}
                        <img className="photo" src={contact.photo || "https://cdn-icons-png.flaticon.com/512/1199/1199663.png"} />
                    </div>
                    <div className="col-9"> {/* Dats Zone */}
                        <h2>{contact.name}</h2>
                        <div className="dats">
                            <div>
                                <i className="icon fa-solid fa-location-dot"></i>
                                <span><strong>{contact.address}</strong></span>
                            </div>
                            <div>
                                <i className="icon fa-solid fa-phone-flip"></i>
                                <span><strong>{contact.phone}</strong></span>
                            </div>
                            <div>
                                <i className="icon fa-solid fa-envelope"></i>
                                <span><strong>{contact.email}</strong></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"> {/* Button Zone */}
                        <button onClick={() => { handleEdit(); }} className="buttons">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button> {/* Button para abrir un modal "Editar Contacto" */}

                        <button onClick={() => { setContactToDelete(contact); handleShowModal(); }} className="buttons">
                            <i className="fa-solid fa-trash-can"></i>
                        </button> {/* Button para abrir un modal de confirmar "Borrar Contacto" */}
                    </div>
                </div>
            ))}

            {showModalEdit && <ContactEditForm
                onClose={handleCloseModal} />}

            {showModalDelete && < ConfirmDeletion
                onClose={handleCloseModal}
                onDelete={() => {
                    deleteContact(contactToDelete.id); //Elimina el contacto que coincida con el ID
                    setContactToDelete(null)
                    handleCloseModal(); //Cierra el modal despues de borrar
                }} />}
        </>
    );
};


//He decidido que los modal esten en otros archivos para tenerlos más localizables y creo que más ordenado


//Arreglar problema con los Button Editar y Borrar porque cuando estas sobre edit el borrar se mueve abajo
//Posiblemente se arregle dando mas estacio en "col-" osea columna