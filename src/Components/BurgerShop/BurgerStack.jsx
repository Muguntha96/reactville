import Ingredient from "./Ingredient"
const BurgerStack = (props) => {
  return (
      <ul className="burger-stack">
{props.stack.length ?
props.stack.map((ingredient,idx) =>(
  <Ingredient 
  key={idx}
   idx={idx}
   ingredient={ingredient}
    removeFromBurger={props.removeFromBurger} 
    /> ))
    :
    <div>
      No Ingredients
    </div>
}
</ul>

  )
}

export default BurgerStack