//Assets
import React from 'react'
import Day from '../../assets/Day.png'
import Night from '../../assets/Night.png'

const Landing = ({dayTime}) => {
  return (
    <div className="landing" style={{ backgroundImage: `url(${dayTime ? Day : Night})` }}>
      <h1 id="splash-logo">Reactville</h1>
    </div>
  )
}

export default Landing