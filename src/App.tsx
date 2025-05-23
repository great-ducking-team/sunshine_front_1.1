import {useState, useEffect} from 'react';
import { BrowserRouter, HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NoPage from './pages/NoPage';
import Login from './pages/Login'
import RegisterA from './pages/RegisterA'
import RegisterB from './pages/RegisterB'
import Listing from './pages/Listing'
import User from './pages/User'
import './App.css';
import { ThemeProvider } from './components/misc/theme_switch/ThemeContext';
import ThemeSwitch from './components/misc/theme_switch/ThemeSwitch';

function App() {
  return (
    <ThemeProvider>
    <div>
      <HashRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/user' element={<User/>} />
          <Route path='/listing' element={<Listing/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registera' element={<RegisterA/>} />
          <Route path='/registerb' element={<RegisterB/>} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
      </HashRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
