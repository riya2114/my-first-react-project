import "./App.css";
import SignUpForm from "./components/loginForm/SignUpForm";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignUpForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;