import { useSelector, useDispatch } from 'react-redux';
import Button from './button';
import { removeBook } from '../../redux/books/bookSlice';

const Card = () => {
  const Dispatch = useDispatch();
  const Booklists = useSelector((state) => state.book.Booklist);
  return (
    Booklists.map((cur) => (
      <div className="card-container" key={cur.item_id}>
        <div className="card-details">
          <div className="min1">
            <p>{cur.catogery}</p>
            <h3>{cur.title}</h3>
            <p>{cur.author}</p>
            <div className="btns-func">
              <a href="/">Comments</a>
              <a
                href="/"
                onClick={(e) => {
                  Dispatch(removeBook(cur.item_id));
                  e.preventDefault();
                }}
              >
                Remove
              </a>
              <a href="/">Edit</a>
            </div>
          </div>
          <div className="min2">
            <i className="fa-solid fa-circle-notch" />
            <span>
              <p>{cur.Percentage}</p>
              <p>completed</p>
            </span>
          </div>
        </div>
        <div className="last-details">
          <p>CURRENT CHAPTER</p>
          <p>{cur.Chapter}</p>
          <Button />
        </div>
      </div>
    ))
  );
};

export default Card;
