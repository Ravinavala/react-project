import { Link, Route, Routes, Outlet } from "react-router-dom";



import MainLayout from './components/Home/Header/MainLayout';
import HomePage from "./pages/HomePage";
import AboutUs from  "./pages/AboutUs";
function App() {
  return (
    
    <MainLayout>
    <Routes>
         <Route path="/about-us" element={<AboutUs />} />
         <Route path="/" element={<HomePage />} />
    </Routes>
    </MainLayout>  
  );
}

export default App;
