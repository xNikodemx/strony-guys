import logo from './logo.svg';
import './App.css';
import Blogs from './pages/Blogs.js';
import Contact from'./pages/Contact.js';
import Home from './pages/Home.js';
import Layout from './pages/layout.js';
import  NoPage from './pages/NoPage.js';
import { Route, Routes } from 'react-router-dom';





function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<Home />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NoPage />} />
    </Routes>

  );
}

export default App;
