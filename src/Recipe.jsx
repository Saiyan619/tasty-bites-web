import React from 'react'
import { useEffect, useState } from 'react';
import RecipeFullDetails from './Components/RecipeFullDetails';
import RecipeCard from './Components/RecipeCard';
import { Link } from 'react-router-dom';
import './recipe.css'


export default function Recipe() {
  const [recipe, setrecipe] = useState([]);
  const [input, setinput] = useState('');
  const [query, setquery] = useState('');
  const [displayUi, setdisplayUi] = useState(false)
  const YOURAPIKEY = '11f36054dec14bc0bb8b1734f997cf3f'
    

  useEffect(() => {
      getFood()
  }, [query])
  
  const getFood = async () => {
    let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOURAPIKEY}&query=${query}`)
      let data = await response.json();
      setrecipe(data.results)
  
  }
 
 
  console.log(recipe)

  function handleSearch() {
    setquery(input)
    console.log(query)
    console.log(input)
  }
  
    function handleInput(event) {
      let inputted = event.target.value;
      setinput(inputted);
    }
    
  return (
      <div >

      
      <div className='input-and-btn-con'>
      <input className='search-food-input' onChange={handleInput} value={input} type="text" placeholder='search Food...' />
        <button className='search-btn' onClick={handleSearch}>enter</button>
      </div>
      <div className='hot-pick-text'><span>HOT PICKS OF THE DAY🍟</span></div>
      
      {displayUi && (<div className='search-ui'><img src='./icons8-search-60.png' alt='search' />
        <p>Search for your favourite bites🍔</p>
      </div>)}
        <div className='recipe-container'>
      
              
        {recipe.map((item, index) => {
          return (
            <RecipeCard
              recipeId={item.id}
                image={item.image}
                name={item.title}
                key={item.id}
            />
           )
        })}
      </div>

  
      
    </div>
  )
}
