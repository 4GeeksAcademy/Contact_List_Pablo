import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Contacts } from "./pages/Contacts";
import { ContactEditForm } from "./components/ContactOptions/ContactEditForm";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Contacts />} />
      <Route path="/form" element={<ContactForm />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/edit" element={<ContactEditForm />} />
      <Route path="*" element={<h1>404 - Page not found</h1>} />
    </>
  )
);