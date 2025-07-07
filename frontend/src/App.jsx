import {Routes,Route} from "react-router";
import CreatePage from "./pages/CreatePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NoteDetailPage  from "./pages/NoteDetailPage.jsx";
import toast from 'react-hot-toast'


function App() {
  return (
   <div data-theme="forest">
   
    <Routes>   
      <Route path = "/"   element = {<HomePage/>} />
      <Route path = "/create"   element = {<CreatePage/>} />
      <Route path = "/note/:id"   element = {<NoteDetailPage/>} />
    </Routes>
   </div>
  )
}

export default App