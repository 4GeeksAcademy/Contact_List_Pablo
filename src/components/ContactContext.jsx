import {createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    return(
        <ContactContext.Provider value={{ contacts, setContacts, addContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    );
};