import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from 'services/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkApi) => {
    try {
      const response = await addContact(name, number);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContactThunk = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, thunkApi) => {
    try {
      const response = await updateContact(id, name, number);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await deleteContact(contactId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
