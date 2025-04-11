import ContactForm from "../../components/ContactList/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/ContactList/SearchBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import css from "./ContactPage.module.css";

const ContactPage = () => {
    const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());  
  }, [dispatch]);

    return (
        <div className={css.container}>
        <h1>Contact Book</h1>
        <ContactForm />
        <SearchBox />
        {loading && <p>Loading..</p>}
        {error && <p>Error 404</p>}
        <ContactList />
      </div>
    );
}

export default ContactPage;