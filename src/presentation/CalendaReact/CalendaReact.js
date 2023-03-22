import { useState, useEffect} from 'react';
import {addDays, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import '../CalendaReact/CalendaReact.css';



const pastMonth = new Date();

export default function CalendaReact() {


  const [open, setOpen] = useState (true);
  const [val, setVal] = useState (true);
  
  
  
  const togglNav = () => {
    setOpen(!open)
  }

  const togglVal = () => {
    setVal(!val)
    setOpen(!open)
  }
    const defaultSelected = {
        from: pastMonth,
        to: addDays(pastMonth, 0)
      };
      const [range, setRange] = useState(defaultSelected)
      
       useEffect(() =>{
         localStorage.setItem('DateJours', JSON.stringify(range));
     }, [range]);
      console.log(range)
      const validation = <div className="validation" ><button className="validate" onClick={togglVal}>Valider</button> </div>
    
      let footer = <p>Please pick the first day.</p>;
      if (range?.from) {
        if (!range.to) {
          footer = <p>{format(range.from, 'PPP')}</p>;
        } else if (range.to) {
          footer = (
            <p className={val ? "chooseDate":""}>
             Du: <strong>{format(range.from, 'PPP', {locale: fr})}</strong>
            <br />
             Au: <strong>{format(range.to, 'PPP', {locale: fr})}</strong>
            </p>
          );
        }
      }
    
      return (

        <div>
           <h1 className="sessions">
      Periode de lecture : 
    </h1>

    <div className="depart">
   <p className="clic"> Cliquez  pour commencer : </p>
   <button onClick={togglNav} className="start">Start</button>
    </div> 

    <div className={open ? "calendrier": "flexo" }>
      <div >
        <DayPicker
        locale={fr} 
          mode="range"
          defaultMonth={pastMonth}
          selected={range}
          footer={validation}
          onSelect={setRange}
        />
        </div>
        </div>
        
        {footer}
           
        </div>
      );
    }