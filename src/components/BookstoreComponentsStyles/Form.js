import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../../redux/books/bookSlice';

const Form = () => {
  const Dispatch = useDispatch();
  const [Data, setData] = useState({
    title: '',
    author: '',
    catogery: 'Science',
    Chapter: '10',
    item_id: nanoid(),
  });
  const updateData = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
      item_id: nanoid(),
      Chapter: 'Introduction',
      Percentage: '0%',
      catogery: 'new',
    });
  };
  const DataHandling = () => {
    Dispatch(addBook(Data));
    setData({
      title: '',
      author: '',
    });
  };
  return (
    <div className="form">
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" name="title" onChange={updateData} value={Data.title} required placeholder="Book title" />
        <input type="text" name="author" onChange={updateData} value={Data.author} required placeholder="Authors" />
        <input type="button" value="ADD BOOK" onClick={DataHandling} />
      </form>
    </div>
  );
};

export default Form;
