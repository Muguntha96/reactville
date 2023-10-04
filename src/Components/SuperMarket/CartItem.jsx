
const CartItem = () => {
	return (
		<div className="cart-card">
			<img src="" alt="product icon" />
			<span>
				<p id="product-name"></p>
				<p id="product-price">$</p>
				<p id="product-quantity">Quantity:</p>
			</span>
			<button>X</button>
		</div>
	)
}

export default CartItem