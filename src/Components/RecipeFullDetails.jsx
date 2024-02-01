import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './recipefulldetails.css'

export default function RecipeFullDetails() {
  const [toggleShowRecipe, settoggleShowRecipe] = useState(false)
  const [details, setdetails] = useState({})

  // const id = 'bb0e6e9e';
  // const key = "4a70a546c2f0b1349122a5bc5851d099";
  const YOURAPIKEY = '11f36054dec14bc0bb8b1734f997cf3f'
 
  const param = useParams()

  const toggleRecipe = () => {
     settoggleShowRecipe(!toggleShowRecipe);
    console.log('hi')
  }

  const getFood = async () => {
    let response = await fetch(`https://api.spoonacular.com/recipes/${param.id}/information?apiKey=${YOURAPIKEY}`)
      let data = await response.json();
      console.log(data);
      setdetails(data)
  }
  // console.log(param.id)
  let score = details.spoonacularScore;
  let SpoonacularScore = Math.floor(score);

  useEffect(() => {
    getFood();
  }, [])
  return (
    <div>

      <div className='details-main-container'>
        <div className='details-sub-container-left'>
          <span className='details-title'>{details.title}</span>
          <div><img className='details-image' src={details.image} alt='food' /></div>
          
          <div className='details-sub_sub-container-left'>
            <span>🥇Food Score: {SpoonacularScore}%</span>
          <span>🍳Glutenfree: {details.glutenFree ? 'Yes' : 'No'}</span>
          <span>⏰Preperation time: {Math.abs(details.preparationMinutes)}mins</span>
        </div>
        </div>

        <div className='details-sub-container-right'>
          <button onClick={toggleRecipe}>{toggleShowRecipe ? 'show ingredient' : 'show recipe'}</button>
          <div className={toggleShowRecipe ? 'details-sub_sub-container-right' : 'details-sub_sub-container-right_active'}>
            <div>
              <p style={{fontSize: '25px', fontWeight:'600'}}>Preperation</p>
            <span dangerouslySetInnerHTML={{__html:details.instructions}} />
            {/* <span dangerouslySetInnerHTML={{__html:details.summary}} /> */}
            </div>
          </div>

          
          <div className={toggleShowRecipe ? 'ingredient-con_active' : 'ingredient-con'}>
          <span className='ingredients-title'>ingredients</span>
          {details.extendedIngredients?.map((ingredient) =>
            <li key={ingredient.id}>{ingredient.original}</li>)
            }
          </div>
          
          
        </div>
      </div>
    
    </div>
  )
}
