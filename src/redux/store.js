import { configureStore } from '@reduxjs/toolkit';
import { booklists } from './books/bookSlice';
import CatogerySlice from './Catogeries/CatogerySlice';

const Store = configureStore({
  reducer: {
    book: booklists,
    catogery: CatogerySlice,

  },
});
export default Store;
