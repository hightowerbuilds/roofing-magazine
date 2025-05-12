import NavBar from '../../Components/NavBar/NavBar';
import './JournalPage.css';
import { useState } from 'react';

const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 }, // Will handle leap year dynamically later
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 },
];

export default function JournalPage() {
  const currentYear = 2025; // You can make this dynamic
  const [expandedMonth, setExpandedMonth] = useState(null);

  const getDaysInMonth = (year, monthIndex) => {
    // Month index is 0-based (0 for January)
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const toggleMonth = (monthName) => {
    setExpandedMonth(expandedMonth === monthName ? null : monthName);
  };

  return (
    <>
    <NavBar />
      <div className='journalPageMainContainer'>
      <h2>Year {currentYear}</h2>

      {months.map((month, index) => (
        <div key={month.name}>
          <button onClick={() => toggleMonth(month.name)}>
            {month.name}
          </button>
          <div
            className="month-days"
            style={{
              display: expandedMonth === month.name ? 'grid' : 'none',
              gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))', // Basic grid layout
              gap: '5px',
              marginTop: '10px',
            }}
          >
            {Array.from({ length: getDaysInMonth(currentYear, index) }, (_, dayIndex) => (
              <div key={dayIndex + 1} className="day-entry">
                {month.name + ' ' + (dayIndex + 1)}
                {/* You can add input fields or buttons for creating journal entries here */}
               <textarea type='text' className='journalTextInput'/>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
   
  );
}