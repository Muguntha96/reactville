import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	return (
		<div className="ingredient-list">
			<ul>
	{props.ingredients.map((ingredient,idx) =><Ingredient key={idx} isList={true} ingredient={ingredient} addToBurger={props.addToBurger} />)}
	
						</ul>
		</div>
	)
}

export default IngredientList
