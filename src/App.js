import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bookstore from './components/Bookstore';
import Catogeries from './components/Catogeries';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Bookstore />} />
        <Route path="/Catogeries" element={<Catogeries />} />
      </Routes>
    </div>
  );
}

export default App;
