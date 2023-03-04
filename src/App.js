import { useState, useEffect } from 'react'
import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Presentation from './presentation/Presentation';
// import Dashboard from './Pages/Dashboard/Dashboard';
import Recap from './Pages/Recap/Recap';
import Sidebar from './Components/NewCharts/Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom';
import ThemeContextProvider from './Context/ThemeContext';
import Status from './Pages/Status/Status';
import Loader from './presentation/Loader/Loader.js';

function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
     setLoader(false);
    }, 2000)
   }, [])
 
  return loader ?

  (
  <div>
  {/* <Sidebar /> */}
    <Loader />
    </div>
  ) : (

     <div className="App" >
      {/* Loader /> */}
      <ThemeContextProvider>
        <Sidebar />  
      <Routes> 
      
        <Route path="/" element={<Presentation />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/status" element={<Status />} />
        
     </Routes> 
     </ThemeContextProvider>
     </div>
  );
}

export default App;
