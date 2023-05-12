import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Button from './button';
import { removeBooks, FetchData } from '../../redux/books/API';

const Card = () => {
  const { Booklist, status, error } = useSelector((state) => state.book);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(FetchData());
  }, [Dispatch]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (Booklist.length === 0) {
    return <div>Empty</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    Booklist.map((cur) => (
      <div className="card-container" key={cur.item_id}>
        <div className="card-details">
          <div className="min1">
            <p>{cur.category}</p>
            <h3>{cur.title}</h3>
            <p className="author">{cur.author}</p>
            <div className="btns-func">
              <a href="/">Comments</a>
              <a
                href="/"
                onClick={(e) => {
                  Dispatch(removeBooks(cur.item_id));
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
