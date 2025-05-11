import React, { useContext, useState } from "react";
import { ContactContext } from "../ContactContext";
import { ContactEditForm } from "../ContactOptions/ContactEditForm";
import { ConfirmDeletion } from "../ContactOptions/ConfirmDeletion";
import "./ContactsRendering.css"


export const ContactsRendering = () => {

    const { contacts, setContacts, deleteContact } = useContext(ContactContext);

    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const [contactToDelete, setContactToDelete] = useState(null);
    const [contactToEdit, setContactToEdit] = useState(null);

    const handleEdit = () => { //Abre Modal Editar contacto
        setShowModalEdit(true);
    }

    const handleSaveEdit = (updateDats) => {
        if (!contactToEdit) return;

        const updateContact = contacts.map((contact) =>
        contact.id === contactToEdit.id
        ? {...contact, ...updateDats }
        : contact );

        setContacts(updateContact);
        handleCloseModal();
    }

    const handleShowModal = () => { //Abre modal para borrar contacto
        setShowModalDelete(true);
    };

    const handleCloseModal = () => { // Cierra Modals
        setShowModalDelete(false);
        setShowModalEdit(false);
        setContactToEdit(null);
    };

    return (
        <>
            {contacts.map((contact, index) => (
                <div key={index} className="boxContact container row">
                    <div className="col-2"> {/* Photo Zone */}
                        <img className="photo" src={contact.photo || "https://cdn-icons-png.flaticon.com/512/1199/1199663.png"} />
                    </div>
                    <div className="col-8"> {/* Dats Zone */}
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
                    <div className="col-2"> {/* Button Zone */}
                        <button onClick={() => { setContactToEdit(contact); handleEdit();}} className="buttons">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button> {/* Button para abrir un modal "Editar Contacto" */}

                        <button onClick={() => { setContactToDelete(contact); handleShowModal(); }} className="buttons">
                            <i className="fa-solid fa-trash-can"></i>
                        </button> {/* Button para abrir un modal de confirmar "Borrar Contacto" */}
                    </div>
                </div>
            ))}

            {showModalEdit && contactToEdit && ( <ContactEditForm
                onClose={handleCloseModal} onSave={handleSaveEdit}
                valueName={contactToEdit.name}
                valueEmail={contactToEdit.email}
                valuePhone={contactToEdit.phone}
                valueAddress={contactToEdit.address}
                valuePhoto={contactToEdit.photo} /> )} {/*Editar initialAddress */}

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