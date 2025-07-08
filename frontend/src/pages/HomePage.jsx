import {useState} from 'react';

import Navbar from "../components/Navbar.jsx";
import RateLimitedUI from '../components/RateLimitedUI.jsx';
import { useEffect } from 'react';
import axios from "axios";

function HomePage() {
  const [isRateLimited, setIsRateLimited] =useState(false);
  const [notes,setNotes] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() =>{
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notes"); 
        console.log(res.data);
      } catch (error) {
        console.log("Error fetching notes");
      }
    }

  },[])
   
  return <div className="min-h-screen">
    <Navbar/>

    {isRateLimited && <RateLimitedUI />}
  </div>
    
}

export default HomePage