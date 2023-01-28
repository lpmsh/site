import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
  useNavigate,
  useAsyncError
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return ( 
    <div>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    
    </Router>
    </div>




   );
}

export default App;