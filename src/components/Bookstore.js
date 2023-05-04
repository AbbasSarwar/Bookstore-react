import './BookstoreComponentsStyles/Bookstore.css';
import { useState } from 'react';
import Card from './BookstoreComponentsStyles/card';
import Form from './BookstoreComponentsStyles/Form';

const Bookstore = () => {
  const [books, setBooks] = useState([
    {
      BookTitle: 'The Hunger Games',
      Catogery: 'Action',
      Author: 'IAK',
      Percentage: '65%',
      Chapter: '17',
    },
    {
      BookTitle: 'Dune',
      Catogery: 'Science',
      Author: 'Frank Herbert',
      Percentage: '5%',
      Chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      BookTitle: 'Capital in the Twenty-First Century',
      Catogery: 'Economy',
      Author: 'Collins',
      Percentage: '0%',
      Chapter: 'Introduction',
    },
  ]);

  return (
    <section className="sec1">
      <Card value={books} />
      <Form addnew={setBooks} />
    </section>
  );
};
export default Bookstore;
