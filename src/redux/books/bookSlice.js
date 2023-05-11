import { createSlice } from '@reduxjs/toolkit';
import { FetchData, addBooks, removeBooks } from './API';

const initialState = {
  Booklist: [],
  status: 'idle',
  error: null,
};

export const booklists = createSlice({
  name: 'Booklist',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(FetchData.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        state.Booklist = action.payload;
      })
      .addCase(FetchData.rejected, (state, action) => {
        state.status = 'Failed';
        state.error = action.error.message;
      })
      .addCase(addBooks.fulfilled, (state, action) => {
        state.Booklist.push(action.payload);
      })
      .addCase(removeBooks.fulfilled, (state, action) => {
        state.Booklist = state.Booklist.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default { booklists };
