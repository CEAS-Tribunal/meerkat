import React from "react";
import NavBar from "./components/NavBar"; 
import Footer from "./components/Footer"; 
import SignUp from "./components/SignUp"; 
import Container from "./components/Container"; 
import {Routes, Route } from 'react-router-dom'; 

  function App() {
    return (
    <div>
      <div className="intro">
        <NavBar />
        <Routes>
            <Route path='/signup' element = {<SignUp/>}/> 
        </Routes> 
        <Container />
      </div>

      <div className = "footer">
        <Footer />
      </div>

    </div>
    );
  };

  export default App;