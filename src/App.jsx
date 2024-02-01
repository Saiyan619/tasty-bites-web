import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeFullDetails from './Components/RecipeFullDetails';


function App() {
 
  
  return (
    <>
      <Router>
     
    <Navbar />
     <Routes>
       <Route path="/" element={<Recipe />} />     
        <Route path="/fulldetails/:id" element={<RecipeFullDetails />} />      
      </Routes>
      
      
    </Router>
    </>
  )
}

export default App
