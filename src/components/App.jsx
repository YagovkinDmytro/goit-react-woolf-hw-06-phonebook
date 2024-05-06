// import { useState } from 'react';
// import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import './PhonebookForm/phonebookForm.css';
import Section from './Section/Section';
import './Section/section.css';
import ContactsList from './ContactsList/ContactsList';
import './ContactsList/contactsList.css';
import FilterContacts from './FilterContacts/FilterContacts';
import './FilterContacts/filterContacts.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsAction, createContactAction } from '../redux/contacts/actions';

export const App = () => {
  const data = useSelector(state => state);
  const { contacts } = data.contacts;
  const { filter } = data.filter;

  const dispatch = useDispatch();

  // dispatch({ type: 'contacts', payload: [123] });
  // dispatch({ type: 'filter', payload: '123' });

  // const [contacts, setContacts] = useState(getLocalStorage());

  // const [filter, setFilter] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'filter') {
      dispatch({ type: 'filter', payload: value });
    }
  };

  const createNewContact = (name, number) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const loginInputId = nanoid();
    dispatch(createContactAction({ id: loginInputId, name, number }));
    // dispatch({
    //   type: CREATE_CONTACT,
    //   payload: { id: loginInputId, name, number },
    // });
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(filter.toLowerCase())
    );
  };

  const handleDelete = id => {
    dispatch(
      contactsAction(contacts => contacts.filter(elem => elem.id !== id))
    );
    // dispatch({
    //   type: CONTACTS,
    //   payload: contacts => contacts.filter(elem => elem.id !== id),
    // });
  };

  // function getLocalStorage() {
  //   const localData = JSON.parse(localStorage.getItem('contacts'));
  //   return localData && localData.length > 0 ? localData : [];
  // }

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="container">
      <Section title="Phonebook">
        <PhonebookForm handleSubmit={createNewContact} />
      </Section>
      <Section title="Contacts">
        <FilterContacts stateFilter={filter} handleChange={handleChange} />
        <ContactsList
          contactsArr={filterContacts()}
          handleDelete={handleDelete}
        />
      </Section>
    </div>
  );
};

// export const App = () => {
//   const [contacts, setContacts] = useState(getLocalStorage());

//   const [filter, setFilter] = useState('');

//   const handleChange = ({ target: { value, name } }) => {
//     if (name === 'filter') {
//       setFilter(value);
//     }
//   };

//   const createNewContact = (name, number) => {
//     const isExist = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (isExist) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }
//     const loginInputId = nanoid();
//     setContacts(prev => [...prev, { id: loginInputId, name, number }]);
//   };

//   const filterContacts = () => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().startsWith(filter.toLowerCase())
//     );
//   };

//   const handleDelete = id => {
//     setContacts(prev => prev.filter(elem => elem.id !== id));
//   };

//   function getLocalStorage() {
//     const localData = JSON.parse(localStorage.getItem('contacts'));
//     return localData && localData.length > 0 ? localData : [];
//   }

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div className="container">
//       <Section title="Phonebook">
//         <PhonebookForm handleSubmit={createNewContact} />
//       </Section>
//       <Section title="Contacts">
//         <FilterContacts stateFilter={filter} handleChange={handleChange} />
//         <ContactsList
//           contactsArr={filterContacts()}
//           handleDelete={handleDelete}
//         />
//       </Section>
//     </div>
//   );
// };
