import { useSelector } from 'react-redux';

const ContactsList = () => {
  const { contacts } = useSelector(state => state.contacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className="contact-list-item" key={id}>
          {name}: {number}
          <button
            className="contact-button delete"
            type="button"
            onClick={() => {}}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
