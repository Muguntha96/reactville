
const Ingredient = (props) => {
	return (
		<li>
	{props.ingredient.name}
	{props.isList 
		?	<button>+</button>
		:	<button>X</button>
	}
		</li>
	
	)
}

export default Ingredient