// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'
import Clock from './Clock'
const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink to='/'> <img src={Logo} alt='logo-react' /></NavLink>
      <NavLink to='/burgers'>
        BURGER SHOP</NavLink>
        <Clock dayTime={props.dayTime} setDayTime={props.setDayTime}/>
    </nav>
  )
}
export default Nav