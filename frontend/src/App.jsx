import {  Routes, Route } from "react-router-dom";
import  RegisterForm from './forms/register';
import Homepage from "./pages/HomePage";
import LoginForm from "./forms/login";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login"  element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    
  );
};

export default App;