
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import { Link} from "react-router-dom";
import Home from './components/Home'
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup'
import NoteState from './context/notes/NotesState';
import  Alert  from './components/Alert';
import './components/style.css'
import Carosal from './components/Carosal';
import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import Footer from './components/Footer';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }
  return (
      <>
      <NoteState>
      <BrowserRouter>
      <Navbar/>
     
      <Alert alert={alert}/>
      <div className="container"> 
      <Routes>
       
      <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About />} />
          
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
      </Routes>
      </div>
    
    </BrowserRouter>
    <Footer/>
    </NoteState>
    
      
     
         
      </>
  );
}

export default App;
