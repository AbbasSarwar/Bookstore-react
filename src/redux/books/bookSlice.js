import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Booklist: [],
};

export const booklists = createSlice({
  name: 'bookLists',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.Booklist.pop(action.payload);
    },
    removeBook: (state, action) => {
      state.Booklist.pop(action.payload);
    },
  },
});

export default booklists.reducer;
