// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Works } from './Pages/Works';
import { Input } from './Pages/Input';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works' element={<Works />} />
        <Route path='/heart' element={<Input path="heart" />} />
        <Route path='/diabetes' element={<Input path="diabetes" />} />
      </Routes>
    </>
  );
}

export default App;
