import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './components/button';
import Navbar from './components/navbar';
import Task1 from './components/task_1';
import Task2 from './components/task_2';
// import Savepdf from './components/savepdf';
// import Startpage from './components/start';
function App() {
  return (
    <Router>
      
    <div>
    
    <Navbar/>
    

    {/* <Startpage/> */}
    
    
    
    <Routes>
    {/* <Route path='/tasks' element={<Button/>}/> */}
    <Route path="/" element={<Button/>}/>
    
    {/* <Route path='/saveit' element={<Savepdf/>}/> */}
    <Route exact path='/task_1' element={<Task1/>}/>
    <Route exact path='/task_2' element={<Task2/>}/>
    {/* <Route path="/" element={<Savepdf/>}/> */}
    </Routes>
    
    </div>
    
    </Router>
  );
}

export default App;
