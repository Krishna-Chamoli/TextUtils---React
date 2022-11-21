import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState(null);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const handleToggle = (e) => {
    if (e.target.value === "light") {
      setMode(null);
      document.body.style.backgroundColor = "white";
    } else if (e.target.value === "primary") {
      let mode = {
        mode: e.target.value,
        style: {
          background: "#052646",
          color: "white",
        }
      }
      setMode(mode);
      document.body.style.backgroundColor = "#052646";
    } else if (e.target.value === "danger") {
      let mode = {
        mode: e.target.value,
        style: {
          background: "#360000",
          color: "white",
        }
      }
      setMode(mode);
      document.body.style.backgroundColor = "#360000";
    } else if (e.target.value === "success") {
      let mode = {
        mode: e.target.value,
        style: {
          background: "#0D2E05",
          color: "white",
        }
      }
      setMode(mode);
      document.body.style.backgroundColor = "#0D2E05";
    }
  }
  return (
    <>
      <Router>
        <NavBar title="TextUtils" aboutText="About TextUtils" handleToggle={handleToggle} mode={mode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm labelHeading="TextUtils - Enter Text To Manipulate" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
