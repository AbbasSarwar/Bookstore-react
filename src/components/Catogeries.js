import { useSelector } from 'react-redux';

const Catogeries = () => {
  const updateStatus = useSelector((state) => state.catogery);
  return (
    <div className="Catogery-container">
      <h1>{updateStatus.status}</h1>
    </div>
  );
};
export default Catogeries;
