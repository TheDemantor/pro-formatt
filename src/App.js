import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import TextStage from './components/TextStage';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "primary")
      document.title = "Pro-Formatt-Dark"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "info")
      document.title = "Pro-Formatt"
    }
  }


  return (

    <>
      <Router>
        <Navbar title="ProFormatt" list="Domain" contact={1234} mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
        
          <Route path="/" element={<TextStage showAlert={showAlert} heading="Enter the text to analyse" mode={Mode} />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
