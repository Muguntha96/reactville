import '../../styles/burger.css'
import { useState } from 'react'
import { ingredients } from '../../data/burger-data'
import IngridientList from './IngredientList'
import BurgerStack from './BurgerStack'

const BurgerShop = (props) => {
  const [stack, setStack] = useState([])
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }

  const removeFromBurger =(idx) =>{
    setStack(stack.filter((el,i) => i!==idx))
  }
  const handleClearOrder = () =>{
    setStack([])
  }
  console.log(ingredients)
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={handleClearOrder}>Clear Order</button>
      </nav>
      <section>
        <IngridientList
        addToBurger={addToBurger}
          ingredients={ingredients}
         
          
        />
        <BurgerStack
         stack={stack} 
        removeFromBurger={removeFromBurger}/>
      </section>
    </div>
  )
}
export default BurgerShop