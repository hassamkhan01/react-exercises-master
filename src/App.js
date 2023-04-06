import logo from './logo.svg';
import { link,Route, Routes } from 'react-router-dom';
import './App.css';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';
import AboutUs from './AboutUs';



function App() {
  return (
    <div className="App">
      <nav>
        <link to='exercise1'>Exercise1</link>
        <link to='exercise2'>Exercise2</link>
        <link to='exercise3'>Exercise3</link>
        <link to='exercise4'>Exercise4</link>
        <link to='about-us'>AboutUs</link>
        
       

      </nav>
       <Exercise1 /> 
       <Exercise2 /> 
       <Exercise3 /> 
       <Exercise4 /> 
       <AboutUs/>
       

      <Routes>
       <Route path ='/exercise1' element={<Exercise1/>}/>
       <Route path ='/exercise2' element={<Exercise2/>}/>
       <Route path ='/exercise3' element={<Exercise3 />}/>
       <Route path ='/exercise4' element={<Exercise4/>}/>
       <Route path ='/About-us' element={<AboutUs/>}/>
      
      
      </Routes>
    </div>
  );
}

export default App;