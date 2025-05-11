
import { NavLink } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'

export default function GamesPage() {
  return (
    <div>

        <NavBar />
        
        games page

        bad jump
        <NavLink to='/badjump'><button className='navButton'>bad jump</button></NavLink>
   
    </div>
  )
}
