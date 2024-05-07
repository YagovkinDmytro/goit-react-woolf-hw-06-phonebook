import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contacts/slice';

const ContactsList = ({ contactsArr, handleDelete }) => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const createNewContact = (name, number) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const loginInputId = nanoid();
    dispatch(addContact({ id: loginInputId, name, number }));
  };

  return (
    <ul>
      {contactsArr.map(({ id, name, number }) => (
        <li className="contact-list-item" key={id}>
          {name}: {number}
          <button
            className="contact-button delete"
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
