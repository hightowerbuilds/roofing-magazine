import { useState } from 'react'
import './index.css'
import Headlines from './Headlines'
import WorldNews from './WorldNews'
import LocalNews from './LocalNews'
import Features from './Features'
import Gallery from './Gallery'


export default function App(){


const [ buttonDisplay, setButtonDisplay ] = useState('#242424')
const [ buttonDisplayTwo, setButtonDisplayTwo] = useState('#242424')
const [ buttonDisplayThree, setButtonDisplayThree] = useState('#242424')
const [ buttonDisplayFour, setButtonDisplayFour] = useState('#242424')
const [ buttonDisplayFive, setButtonDisplayFive] = useState('#242424')
const [ display, setDisplay] = useState('none')
const [ displayWorldNews, setDisplayWorldNews ] = useState('none')
const [ displayLocalNews, setDisplayLocalNews ] = useState('none')
const [ displayFeatures, setDisplayFeatures ] = useState('none')
const [ displayGallery, setDisplayGallery ]  = useState('none')
const [ fontColorOne, setFontColorOne ] = useState('beige')
const [ fontColorTwo, setFontColorTwo ] = useState('beige')
const [ fontColorThree, setFontColorThree ] = useState('beige')
const [ fontColorFour, setFontColorFour ] = useState('beige')
const [ fontColorFive, setFontColorFive ] = useState('beige')


const buttonFx = function handleButtonColor( xx, yy ){
 xx === 'orange' ? yy('#242424') : yy('orange')
}

const buttonFontColorFx = function handleButtonFont(qq, uu){
  qq === 'beige' ? uu('#242424') : uu('beige')
}

function handleClickOne(){
  display === 'none' ? setDisplay('block') : setDisplay('none')
  buttonFx(buttonDisplay, setButtonDisplay)
  buttonFontColorFx(fontColorOne, setFontColorOne)
}

function handleClickTwo(){
  displayWorldNews === 'none' ? setDisplayWorldNews('block') : setDisplayWorldNews('none')
  buttonFx(buttonDisplayTwo, setButtonDisplayTwo)
  buttonFontColorFx(fontColorTwo, setFontColorTwo)
}

function handleClickThree(){
  displayLocalNews === 'none' ? setDisplayLocalNews('block') : setDisplayLocalNews('none')
  buttonFx(buttonDisplayThree, setButtonDisplayThree)
  buttonFontColorFx(fontColorThree, setFontColorThree)
}

function handleClickFour(){
  displayFeatures === 'none' ? setDisplayFeatures('block') : setDisplayFeatures('none')
  buttonFx(buttonDisplayFour, setButtonDisplayFour)
  buttonFontColorFx(fontColorFour, setFontColorFour)
}

function handleClickFive(){
  displayGallery === 'none' ? setDisplayGallery('block') : setDisplayGallery('none')
  buttonFx(buttonDisplayFive, setButtonDisplayFive)  
  buttonFontColorFx(fontColorFive, setFontColorFive)
}


  return (
  

<div className='pageBody'>
  <div style={{
    marginLeft: 10,
    fontFamily: 'monospace',
    fontSize: 34
  }}>
  <h1 style={{
    color: '#246024',
    width: 1260
  }}>roofing magazine</h1>
    <div>
      <button onClick={handleClickOne} style={{
        fontSize: 24, 
        fontFamily: 'monospace', 
        backgroundColor: buttonDisplay, 
        color: fontColorOne
        }}>headlines</button>
      <button onClick={handleClickTwo} style={{
        fontSize: 24, 
        fontFamily: 'monospace', 
        backgroundColor: buttonDisplayTwo, 
        color: fontColorTwo}}>world news</button>
      <button onClick={handleClickThree} style={{
        fontSize: 24, 
        fontFamily: 'monospace', 
        backgroundColor: buttonDisplayThree,
        color: fontColorThree
        }}>local news</button>
      <button onClick={handleClickFour} style={{
        fontSize: 24, 
        fontFamily: 'monospace', 
        backgroundColor: buttonDisplayFour,
        color: fontColorFour}}>features</button>
      <button onClick={handleClickFive} style={{
        fontSize: 24, 
        fontFamily: 'monospace', 
        backgroundColor: buttonDisplayFive,
        color: fontColorFive
        }}>gallery</button>

    </div>

  </div>
  

    <div style={{
      display: display
     }}>
        <Headlines/>
    </div>

    <div style={{
      display: displayWorldNews
    }}
                 >
        <WorldNews />
    </div>

    <div style={{
      display: displayLocalNews,
      }}>

      <LocalNews/>
    </div>

    <div style={{
      display: displayFeatures,
     }}>
      <Features />
    </div>

    <div style={{
      display: displayGallery
       }}>
      <Gallery />
      
    </div>
</div>

  )
}