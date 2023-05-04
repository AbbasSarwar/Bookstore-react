import Button from './button';

const Card = ({ value }) => (
  value.map((cur) => (
    <div className="card-container" key={0}>
      <div className="card-details">
        <div className="min1">
          <p>{cur.Catogery}</p>
          <h3>{cur.BookTitle}</h3>
          <p>{cur.Author}</p>
          <div className="btns-func">
            <a href="/">Comments</a>
            <a href="/">Remove</a>
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

export default Card;
