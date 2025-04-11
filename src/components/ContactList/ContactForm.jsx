import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsOps"; 

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Обов’язкове поле"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Формат: 123-45-67")
      .required("Обов’язкове поле"),
  });

  const handleSubmit = (values, actions) => {
    
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>

        <label>
          Number
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
