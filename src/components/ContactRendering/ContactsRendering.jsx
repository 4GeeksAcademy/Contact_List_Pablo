import React, { useContext, useState, useEffect } from "react";
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

/////////////////////////////////
    useEffect(() => {
        fetchContacts();
    }, []);


    const fetchContacts = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/PabloPh/contacts");

            if (!response.ok) {
                throw new Error ("We have not been able to recover the contacts");
            }

            const data = await response.json();

            const formattedContacts = data.contacts.map(contact => ({
                id: contact.id,
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                address: contact.address,
                photo: ""
            }));

            setContacts(formattedContacts);
        } catch (error) {
            console.error("Error getting contacts", error.message);
        }
    };


    //////////////////////////////////////////////

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
                valuePhoto={contactToEdit.photo} /> )}

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

//En principio lo habia hecho con opción y imagen pero cuando aplique la API vi que no tenia opción a cargar imagen, decidi dejarlo ya que lo hice

//Desde que aplique la API ya no funciona el cargar imagenes debido a que no es algo que acepte la API

//Todo lo relacionado con las fotos de contactos preferi dejarlo por si me es útil a futuro