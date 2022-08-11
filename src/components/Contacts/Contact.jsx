import React from 'react';
import { Container, Span, Button } from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filterContacts = filteredContacts(contacts, filter);

  return (
    <Container>
      <ul>
        {filterContacts.map(({ id, name, number }) => (
          <li key={id}>
            <Span>
              {name} : {number}{' '}
              <Button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </Span>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default ContactList;
