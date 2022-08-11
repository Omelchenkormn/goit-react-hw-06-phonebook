import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button, Label, Input, Forms, Error } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact } from 'redux/contactsSlice';

const initialValues = {
  name: '',
  number: '',
};
const validSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(15)
    .typeError('Должно быть строкой')
    .required('Required'),
  number: yup.string().min(6).max(12).required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const addNewContact = (name, number) =>
    dispatch(addContact({ name, number }));
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = (initialValues, { resetForm }) => {
    const { name, number } = initialValues;
    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      addNewContact(name, number);
    }
    resetForm();
  };
  const isAdded = name => contacts.map(contact => contact.name).includes(name);

  return (
    <Formik
      validationSchema={validSchema}
      validateOnBlur={true}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Forms autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <Error>
            <ErrorMessage name="name" />{' '}
          </Error>
        </Label>
        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" />
          <Error>
            <ErrorMessage name="number" />
          </Error>
        </Label>
        <Button type="submit">Add contact</Button>
      </Forms>
    </Formik>
  );
};

export default ContactForm;
