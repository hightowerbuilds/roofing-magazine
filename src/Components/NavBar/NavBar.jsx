import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'




export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)



  return (
    <div className='navBarMainContainer'>

        <NavLink to='/'><button className='navButton'>home</button></NavLink>
        <NavLink to='/blog'><button className='navButton'>writing</button></NavLink>
        <NavLink to='/art'><button className='navButton'>visions</button></NavLink>
        <NavLink to='/games'><button className='navButton'>games</button></NavLink>
        <NavLink to='/journal'><button className='navButton'>journal</button></NavLink>
    </div>
  )
}
4