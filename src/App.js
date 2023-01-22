// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert.js';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert=(type,message)=>{
    setAlert({
        type:type,
        msg:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#414950';
      document.body.style.color='white';
      document.title="TextUtils- Dark Mode"
      showAlert('success',": Dark Mode has been enabled")
    //   setInterval(() => {
    //     document.title="TextUtils is Amazing"
    //   }, 2000);
    //   setInterval(() => {
    //     document.title="Install TextUtils Now"
    //   }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      // document.title="TextUtils- Light Mode"
      showAlert('success',":  Light Mode has been enabled")
    }
  }

  const toggleRed=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='red';
      document.body.style.color='white';
      showAlert('success',": Dark Mode has been enabled")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';

      showAlert('success',":  Light Mode has been enabled")
    }
  }
  const toggleGreen=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='Green';
      document.body.style.color='white';
      showAlert('success',": Dark Mode has been enabled")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert('success',":  Light Mode has been enabled")
    }
  }
  
  return (
  <>
    {/* <Router> */}
    <Navbar title="Good Boy" aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed} toggleGreen={toggleGreen}/>
    <Alert alert={alert}/>
    <div className="container my-4"> 
    {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm heading="Analyze Your Text Here" mode={mode}  showAlert={showAlert}/>}/> */}
          {/* <Route exact path="/about" element={<About/>}/> */}

            <TextForm heading="Analyze Your Text Here" mode={mode}  showAlert={showAlert}/>
        {/* </Routes> */}
    </div>
    {/* </Router> */}
  </>
  );
}

export default App;
