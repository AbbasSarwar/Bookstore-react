import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POST_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wzFfPqlK3d9W6tuQzkxQ/books';
export const FetchData = createAsyncThunk('Booklists/get', async () => {
  const res = await axios.get(POST_URL);
  const books = Object.keys(res.data).map((key) => ({
    item_id: key,
    ...res.data[key][0],
  }));
  return books;
});
export const addBooks = createAsyncThunk('Booklists/addBook', async (bookData) => {
  await axios.post(POST_URL, bookData);
  return bookData;
});
export const removeBooks = createAsyncThunk('Booklists/removebook', async (bookId) => {
  await axios.delete(`${POST_URL}/${bookId}`);
  return bookId;
});
