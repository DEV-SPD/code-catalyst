// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Works } from './Pages/Works';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works' element={<Works />} />
      </Routes>
    </>
  );
}

export default App;
