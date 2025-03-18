import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loading from './components/Loading.jsx';
import Card from './components/Card.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import ExplorePage from './Pages/ExplorePage.jsx';
import Form from './Pages/Form.jsx';
createRoot(document.getElementById("root")).render(
 
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/loading" element={<Loading />}></Route>
      <Route path="/card" element={<Card />}></Route>
      <Route path='/explore' element={<ExplorePage/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
   </Routes>
      
   </BrowserRouter>

  
);
