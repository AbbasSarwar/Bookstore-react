import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Booklist: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      Percentage: '10%',
      Chapter: '17',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      Percentage: '0%',
      Chapter: 'Introduction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      Percentage: '90%',
      Chapter: 'The last',
    },
  ],
};

export const booklists = createSlice({
  name: 'bookLists',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.Booklist.push(action.payload);
    },
    removeBook: (state, action) => {
      state.Booklist = state.Booklist.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booklists.actions;
export default { booklists };
