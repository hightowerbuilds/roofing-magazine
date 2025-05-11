import NavBar from '../../Components/NavBar/NavBar'
import './JournalPage.css'
import { useState } from 'react';


/**
 * create a page that opens a div for each month and then a div for each day
 * at that point the user can create an entry in to the journal
 * 
 * need to create a supabase table for the journal
 */

export default function JournalPage() {

const [showJan, setShowJan] = useState('none');
const [showFeb, setShowFeb] = useState('none');
const [showMar, setShowMar] = useState('none');
const [showApr, setShowApr] = useState('none');
const [showMay, setShowMay] = useState('none');
const [showJun, setShowJun] = useState('none');
const [showJul, setShowJul] = useState('none');
const [showAug, setShowAug] = useState('none');
const [showSep, setShowSep] = useState('none');
const [showOct, setShowOct] = useState('none');
const [showNov, setShowNov] = useState('none');
const [showDec, setShowDec] = useState('none');

const handleJanuary = () => {
   if (showJan === 'contents') {
        setShowJan('none');
    }
    else if (showJan === 'none') {
        setShowJan('contents');
    }
}

const handleFebruary = () => {
    if (showFeb === 'contents') {
        setShowFeb('none');
    }
    else if (showFeb === 'none') {
        setShowFeb('contents');
    }
}

  return (
    <div>
        <NavBar />
        
      <h2>year 2025</h2>

        <br /><br />
        <div>
           <button onClick={handleJanuary} >january</button>
            <div style={{ display: showJan }}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>   
            </div>
        </div>
        <div>
            <button onClick={handleFebruary}>february</button>
             <div style={{ display: showFeb }}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>   
            </div>
        </div>
        <div>march</div>
        <div>april</div>
        <div>may</div>
        <div>june</div>
        <div>july</div>
        <div>august</div>
        <div>september</div>
        <div>october</div>
        <div>november</div>
        <div>december</div>
    </div>
  )
}
