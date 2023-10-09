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
  const removeFromBurger = (idx, indx) => {
    console.log(idx)
    console.log(stack)
    setStack(stack.filter((el, i, j) =>
      (i !== idx) && (j !== indx)
    ))
  }
  const handleClearOrder = () => {
    setStack([])
  }
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
          stack={stack}
        />
        <BurgerStack
          stack={stack}
          removeFromBurger={removeFromBurger} />
      </section>
    </div>
  )
}
export default BurgerShop