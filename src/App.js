import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './components/button';
import Navbar from './components/navbar';
import Task1 from './components/task_1';
import Task2 from './components/task_2';
import Task6 from './components/task_6';
import Task8 from './components/task_8';
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
    <Route exact path='/task_3' element={<Task6/>}/>
    <Route exact path='/task_3' element={<Task6/>}/>
    <Route exact path='/task_5' element={<Task6/>}/>
    <Route exact path='/task_6' element={<Task6/>}/>
    <Route exact path='/task_7' element={<Task6/>}/>
    <Route exact path='/task_8' element={<Task8/>}/>
    <Route exact path='/task_9' element={<Task6/>}/>
    <Route exact path='/task_10' element={<Task6/>}/>
    <Route exact path='/task_11' element={<Task6/>}/>
    <Route exact path='/task_12' element={<Task6/>}/>
    <Route exact path='/task_13' element={<Task6/>}/>
    <Route exact path='/task_14' element={<Task6/>}/>
    <Route exact path='/task_15' element={<Task6/>}/>

    {/* <Route path="/" element={<Savepdf/>}/> */}
    </Routes>
    
    </div>
    
    </Router>
  );
}

export default App;
