import './GamesPage.css'
import { NavLink } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'




/**
 * Create GAMES heading image 
 * Background image
 * Footer / Dashboard with scoreboard? 
 * 
 */



export default function GamesPage() {
  return (
    <div className='gamesPageMainContainer'>  

        <NavBar />
        <NavLink className='badJumperContainer' to='/badjumper'>Bad Jumper</NavLink>
      
    </div>
  )
}
