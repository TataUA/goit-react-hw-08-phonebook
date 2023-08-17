import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { selectContactsFilter } from 'redux/contacts/contactsSelectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  function onFilterContact(e) {
    dispatch(setFilter(e.target.value.trim()));
  }

  return (
    <Label htmlFor="">
      Find contact by name
      <Input
        type="text"
        value={filter}
        placeholder="Search..."
        onChange={onFilterContact}
      />
    </Label>
  );
};
