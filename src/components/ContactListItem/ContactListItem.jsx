import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContactThunk } from 'redux/contacts/contactsThunk';
import { ItemLi, ItemSpan, Button } from './ContactListItem.styled';
import { setActiveUpdate } from 'redux/contacts/contactsSlice';
import { selectContactsActive } from 'redux/contacts/contactsSelectors';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const active = useSelector(selectContactsActive);

  return (
    <ItemLi>
      {' '}
      {name}
      <ItemSpan>&#9990; {number}</ItemSpan>
      <Button type="button" aria-label='Edit contact' onClick={() => dispatch(setActiveUpdate(true))}>
        Edit
      </Button>
      <Button type="button" aria-label='Delete contact' onClick={() => dispatch(deleteContactThunk(id))}>
        Delete
      </Button>

      {active && <UpdateForm id={id} />}
    </ItemLi>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
