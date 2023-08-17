import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsError,
  selectFilteredContacts,
  selectContactsIsLoading,
} from 'redux/contacts/contactsSelectors';
import { fetchContactsThunk } from 'redux/contacts/contactsThunk';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Loader } from 'components/Loader/Loader';
import { Error, List, Text } from './ContactList.styled';
import { selectUserAuthentication } from 'redux/auth/authSelectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const authenticated = useSelector(selectUserAuthentication);

  useEffect(() => {
    if (!authenticated) return;
    dispatch(fetchContactsThunk());
  }, [authenticated, dispatch]);

  return (
    <>
      {loading && <Loader />}
      {!loading && !error && !visibleContacts?.length && <Text>No found!</Text>}
      <List>
        {visibleContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
      {error && <Error>Sorry, something went wrong...</Error>}
    </>
  );
};
