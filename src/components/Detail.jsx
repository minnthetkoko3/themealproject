import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id} = useParams();
  const [meals, setMeals] = useState({});

  useEffect(() => {
    fetchMeal();
  });

  const fetchMeal = async() => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const {meals} = await api.json();
    setMeals(meals[0])
    console.log(meals[0]);

  }
  
  return (
    <div>
      <img className='' src={meals.strMealThumb} alt="" />
      
    </div>
  )
}

export default Detail
