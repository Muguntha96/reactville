import Ingredient from "./Ingredient"
const BurgerStack = (props) => {
  return (
   <div>
     <ul className="burger-stack">
{props.stack.map((ele,idx) => <Ingredient 
key={idx}
 idx={idx}
 ingredient={ele}
  removeFromBurger={props.removeFromBurger}/> )}
</ul>
   </div>
  )
}

export default BurgerStack