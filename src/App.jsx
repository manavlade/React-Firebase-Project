import './App.css'
import { Route, Routes } from 'react-router-dom'

//IMPORTING PAGES
import LogInUser from './Pages/Login';
import RegisterUser from './Pages/Register'
import MyNavabar from './Components/Navbar';
import BookListing from './Pages/Books';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <MyNavabar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/login' element={<LogInUser />} /> 
        <Route path='/Book/Listing' element={<BookListing />} /> 
      </Routes>
    </>
  )
}

export default App
