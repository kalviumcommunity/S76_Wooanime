import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loading from './components/Loading.jsx';
import Card from './components/Card.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
createRoot(document.getElementById("root")).render(
 
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/loading" element={<Loading />}></Route>
      <Route path="/card" element={<Card />}></Route>

   </Routes>
      
   </BrowserRouter>

  
);
