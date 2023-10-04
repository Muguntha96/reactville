import '../../styles/mail.css'

//Data & Assets
import LobbyImg from '../../assets/post-office-lobby.png'
import { initialPOBoxes, initialLetters } from "../../data/post-data"

const PostOffice = (props) => {
	console.log(initialPOBoxes, initialLetters)

	return (
		<div className="post-office">

			<nav>
				<h1>Post Office</h1>
				Navlinks here
			</nav>

			<div className="postoffice-layout">
				<section className="img-container"><img src={LobbyImg} alt="post office illustration" /></section>
				Routes here
			</div>

		</div>
	)
}

export default PostOffice