import Ingredient from "./Ingredient"
const BurgerStack = (props) => {
  return (
   
     <ul className="burger-stack">
{props.stack.length ?
props.stack.map((ele,idx) =>(
  <Ingredient 
  key={idx}
   idx={idx}
   ingredient={ele}
    removeFromBurger={props.removeFromBurger} 
    /> )).reverse()
    :
    <div>
      No Ingredients
    </div>
}
</ul>

  )
}

export default BurgerStack