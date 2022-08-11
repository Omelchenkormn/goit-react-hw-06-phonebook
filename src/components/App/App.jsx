import React from 'react';
import { Container } from './App.styled';
import { Apps } from './App.styled';
import ContactForm from 'components/Form/Form';
import ContactList from 'components/Contacts/Contact';
import Filter from 'components/FilterContact/Filter';
// import { useSelector } from 'react-redux/es/exports';

const App = () => {
  // const contacts = useSelector(state => state.contacts.items);
  return (
    <Apps>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        {/* {contacts.length ? ( */}
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
        {/* ) : null} */}
      </Container>
    </Apps>
  );
};
export default App;
