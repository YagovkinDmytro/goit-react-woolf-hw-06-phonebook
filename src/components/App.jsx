import PhonebookForm from './PhonebookForm/PhonebookForm';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import FilterContacts from './FilterContacts/FilterContacts';
import './PhonebookForm/phonebookForm.css';
import './Section/section.css';
import './ContactsList/contactsList.css';
import './FilterContacts/filterContacts.css';

export const App = () => {
  // const handleChange = ({ target: { value, name } }) => {
  //   if (name === 'filter') {
  //     dispatch({ type: 'filter', payload: value });
  //   }
  // };

  // const createNewContact = (name, number) => {
  //   const isExist = contacts.some(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   if (isExist) {
  //     alert(`${name} is already in contacts.`);
  //     return;
  //   }
  //   const loginInputId = nanoid();
  //   dispatch(createContactAction({ id: loginInputId, name, number }));
  //   // dispatch({
  //   //   type: ADD_CONTACT,
  //   //   payload: { id: loginInputId, name, number },
  //   // });
  // };

  // const filterContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().startsWith(filter.toLowerCase())
  //   );
  // };

  // const handleDelete = id => {
  //   dispatch(
  //     contactsAction(contacts => contacts.filter(elem => elem.id !== id))
  //   );
  //   // dispatch({
  //   //   type: CONTACTS,
  //   //   payload: contacts => contacts.filter(elem => elem.id !== id),
  //   // });
  // };

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
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <FilterContacts />
        <ContactsList />
      </Section>
    </div>
  );
};
