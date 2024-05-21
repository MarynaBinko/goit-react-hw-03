import styles from "./ContactForm.module.css"
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
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
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
      <Form className={styles.form}>
        <div>
          <label htmlFor={nameFieldId} className={styles.label}>Name</label>
          <Field type="text" name="name" id={nameFieldId} className={styles.field} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numberFieldId} className={styles.label}>Number</label>
          <Field type="text" name="number" id={numberFieldId} className={styles.field}/>
          <ErrorMessage name="number" component="span" />
        </div>
       

        <button type="submit" className={styles.btn}>Add contact</button>
      </Form>
    </Formik>

    </div>
  )
}

export default ContactForm
