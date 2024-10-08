import styles from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
          
          
        />
      ))}
    </div>
  );
};

export default ContactList;
