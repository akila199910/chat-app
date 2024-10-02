import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";



function App() {
  return (
    <div className=" p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
