import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login';
import Home from './home';
import Profile from './profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />   
      <Route path='/home' element={<Home />} />   
      <Route path='/profile' element={<Profile />} />   
    </Routes>
  );
}

export default App;
