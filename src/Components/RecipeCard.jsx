import React from 'react'
import { Link } from 'react-router-dom'


import './recipecard.css'

export default function RecipeCard({image, name, tag, recipeId}) {
  return (
    
         <div className="food-card">
      <img className="food-image" src={image} alt='title'/>
      <div className="food-details">
        <h2 className="food-title">{name}</h2>
        <div >
        <p className="food-description">{tag === '' ? 'none' : tag}</p>
        </div>
        <div className='ingredients-and-book-con'>
        <Link to={"/fulldetails/" + recipeId}>
            Check ingredients
            </Link>
        {/* <Link className='to-details' to={'/fulldetails'}></Link> */}
        </div>
      </div>

      
    </div>
   
  )
}
