import './NavBar.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navBarMainContainer'>

        <NavLink to='/'><button className='navButton'>home</button></NavLink>
        <NavLink to='/blog'> <button className='navButton'>writing</button></NavLink>
        <NavLink to='/art'> <button className='navButton'>visions</button></NavLink>
        <NavLink to='/games'> <button className='navButton'>games</button></NavLink>

    </div>
  )
}
