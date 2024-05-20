// import styles from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
import * as Yup from "yup";



const ContactForm = ({onAddContact}) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const initialValues = {
    name: "",
    number: ""
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
   number: Yup.string().email("Must be a valid email!").required("Required"), 
  });
 

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      ...values
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span" />
        </div>
       

        <button type="submit">Add contact</button>
      </Form>
    </Formik>

    </div>
  )
}

export default ContactForm
