import '../../styles/burger.css'
import { useState } from 'react'
import { ingredients } from '../../data/burger-data'
import IngridientList from './IngredientList'
import BurgerStack from './BurgerStack'


const BurgerShop = () => {
  const [stack,setStack]=useState([])
  console.log(ingredients)
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngridientList key={ingredients.name} ingredients={ingredients} />
      	
        
      <BurgerStack />
      </section>
    </div>
  )
}

export default BurgerShop