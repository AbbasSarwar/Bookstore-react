const Form = () => (
  <div className="form">
    <h1>ADD NEW BOOK</h1>
    <form>
      <input type="text" name="BookTitle" placeholder="Book title" />
      <select name="Catogery">
        <option disabled selected>Select Author</option>
        <option label="IAK" name="Authors" value="IAK" />
        <option label="Frank Herbert" name="Authors" value="Frank Herbert" />
        <option label="Collins" name="Authors" value="Collins" />
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>
  </div>
);

export default Form;
