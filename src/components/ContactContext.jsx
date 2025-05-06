import {createContext, useState } from "react";
import { Contacts } from "../pages/Contacts";

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
        <ContactContext.Provider value={{ contacts, addContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    );
};