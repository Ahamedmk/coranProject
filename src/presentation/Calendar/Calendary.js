import React, { useState } from "react";
import '../Calendar/Calendary.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const App = () => {
  // ✅ a change in default state: { from: ..., to: ... }
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });
  const [solution, setSolution] = useState ([]);
  const [open, setOpen] = useState (true);
  
  
  const togglNav = () => {
    setOpen(!open)
  }
    console.log(open)
  const test = {...selectedDayRange};
  console.log(selectedDayRange.from)
  console.log((test.from));
   const valDebut = test.from
   
   const valFin = test.to
   console.log(valDebut)
   console.log(valFin)

  //  setSolution(testo)
  //  console.log(solution)
  console.log(test)
  console.log(valDebut)

  //datedebut
  // const deb = valDebut.day
  // console.log(deb)
  
  

  //datefin
  // const fina = valFin.day
  // console.log(fina)

 
   const essai = () => {
     setSolution(valDebut, valFin);
     
    }
   
   
  // console.log(consta.day)
  
  // const testo = test.to;
  // console.log(testo.day)
   
  return (
  <div>
    <h1 className="session">
      Periode de lecture : 
    </h1>

   <div className="depart">
   <p className="clic"> Cliquez  pour commencer => </p>
   <button onClick={togglNav} className="start">Start</button>
    </div> 



    <div className={open ? "calendrier": "flexo" }>
      <div >
      <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      colorPrimary="#0fbcf9" // added this
      colorPrimaryLight="rgba(75, 207, 250, 0.4)" 
      calendarTodayClassName="custom-today-day"
      calendarClassName="responsive-calendar"
      shouldHighlightWeekends
      
      
      />
    </div>
    <div>
     
     
    </div>
</div>
</div>
  );
};

export default App;