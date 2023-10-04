import Button from "./Button"
import InputPad from './InputPad'

const ControlPanel = (props) => {
	return (
		<div className="control-panel">
			<div id="input-display"></div>
			<InputPad/>
			<section>
				<Button name="DEPOSIT" />
				<button>CLEAR</button>
				<Button name="WITHDRAW"/>
			</section>
		</div>
	)
}

export default ControlPanel