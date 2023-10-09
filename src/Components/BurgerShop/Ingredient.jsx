
const Ingredient = (props) => {
	return (
 props.disabled ?
 <li style={{backgroundColor:'darkgray'}}>
{props.ingredient.name}
{!props.list && <button onClick={() =>props.removeFromBurger(props.idx)}>X</button>}
 </li>
	: <li style={{backgroundColor:props.ingredient.color}}>
			{props.ingredient.name}
	{ props.list 
	? <button  onClick={()=>
		props.addToBurger(props.ingredient)}>+</button>
		:	<button onClick={() =>props.removeFromBurger(props.idx)}>X</button>
	}
		</li>
	
	)
}

export default Ingredient