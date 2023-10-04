//Assets
import Day from '../../assets/Day.png'
import Night from '../../assets/Night.png'

const Landing = () => {
  return (
    <div className="landing" style={{ backgroundImage: `url(${Day})` }}>
      <h1 id="splash-logo">Reactville</h1>
    </div>
  )
}

export default Landing