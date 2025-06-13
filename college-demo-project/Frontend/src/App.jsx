import React from 'react'
import './index.css'; // or your tailwind CSS file
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Popular from './pages/Popular.jsx';
import Review from './pages/Review.jsx';
import Footer from './pages/Footer.jsx';

const App = () => {
  return (
   <div>  
    <Navbar/>
    <Home/>
    <About/>
    <Popular/>
    <Review/>
    <Footer/>
   </div>
  )
}

export default App
