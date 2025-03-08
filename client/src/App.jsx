import LandingPage from './components/LandingPage'
import { useState,useEffect } from 'react';
import Loading from './components/Loading';

function App() {
 const [loading, setLoading] = useState(true);
 useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },3000);

 },[])
  return loading ? <Loading/> : <LandingPage></LandingPage>;
}

export default App
