import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/contactsOps";

import Contact from "./Contact";

import { selectFilteredContacts, selectLoading, selectError } from "../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
 
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));  
  };
  
  if (filteredContacts.length === 0) {
    return <p>Контактів не знайдено</p>;
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error occurred while fetching contacts. Please try again later.</p>}
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} onDelete={handleDelete} />
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;