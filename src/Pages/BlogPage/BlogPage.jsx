import './BlogPage.css'
import NavBar from '../../Components/NavBar/NavBar'
import { useState } from 'react'

export default function BlogPage() {

  const [ firstSelection, setFirstSelection ] =  useState('none')
  const handleSelection = () => {
    if (firstSelection === 'none'){
      setFirstSelection('contents')
    } else if (firstSelection === 'contents'){
      setFirstSelection('none')
    }
  }


  return (
    <div className='blogMainContainer'>
       <NavBar />
      <div className='blogHeading'>
        Sum of All Fingertips
          
      </div>
    

      <div className='blogFirstSelection'>
        <h4>why be a roofer?</h4> <button onClick={handleSelection}>show article</button>
          <br /><br />
        <p style={{ display: firstSelection}}>
          I've been posed with a question, a question that stands night and day at some 30 odd degrees beckoning my response or some kind of upward momentum towards its slopes. Why do I love roofing? My course has been tried a mere year at the be-footed and hammered talent, the trade of the billy goat, long-armed pine percher. Did you love climbing trees as a kid? You like jumping off bridges and cliffs into some ice cold run off? Does the sound of screw gun sort of calm you down? You may love roofing as well. But, as seen over the past year or so you probably won't. 
          <br />
          <br />
          It seems roofing is a slice of life that has most people searching for something else. So what does roofing actually entail. The answer ought to be clear. Block water from entering the home. We create a barrier design to let anything run right off the roof. One might suggest ask of one self the direction that water runs 
        </p>
      </div>
    </div>
  )
}
