import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/slice';

const ContactsList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const setfilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(filter.toLowerCase())
    );
  };

  return (
    <ul>
      {setfilterContacts().map(({ id, name, number }) => (
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
