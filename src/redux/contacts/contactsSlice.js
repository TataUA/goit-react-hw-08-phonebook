import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
  updateContactThunk,
} from './contactsThunk';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
  activeUpdate: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setActiveUpdate: (state, { payload }) => {
      state.activeUpdate = payload;
    },
  },
  extraReducers: builder =>
    builder
      //getContacts
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //addContact
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.push(payload);
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //updateContact
      .addCase(updateContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.map(contact => {
          if (contact.id === payload.id) return payload;
          return contact;
        });
        state.activeUpdate = false;
      })
      .addCase(updateContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //deleteContact
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const { setFilter, setActiveUpdate } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
