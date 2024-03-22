import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './components/button';
import Navbar from './components/navbar';
import Task1 from './components/task_1';
import Task2 from './components/task_2';
import Task6 from './components/task_6';
import Task8 from './components/task_8';
import Task5 from './components/task_5';
import Task7 from './components/task_7';
import Task15 from './components/task_15';
import Task11 from './components/task_11';
import Task3 from './components/task_3';
import Task4 from './components/task_4';
import Task13 from './components/task_13';
import Task10 from './components/task_10';
import Task9 from './components/task_9';
import Task12 from './components/task_12';
import Task14 from './components/task_14';
// import Savepdf from './components/savepdf';
// import Startpage from './components/start';
function App() {
  return (
    <Router>

      <div>

        <Navbar />


        



        <Routes>
          
          <Route path="/" element={<Button />} />

          
          <Route exact path='/task_1' element={<Task1 />} />
          <Route exact path='/task_2' element={<Task2 />} />
          <Route exact path='/task_3' element={<Task3 />} />
          <Route exact path='/task_4' element={<Task4 />} />
          <Route exact path='/task_5' element={<Task5 />} />
          <Route exact path='/task_6' element={<Task6 />} />
          <Route exact path='/task_7' element={<Task7 />} />
          <Route exact path='/task_8' element={<Task8 />} />
          <Route exact path='/task_9' element={<Task9 />} />
          <Route exact path='/task_10' element={<Task10 />} />
          <Route exact path='/task_11' element={<Task11 />} />
          <Route exact path='/task_12' element={<Task12 />} />
          <Route exact path='/task_13' element={<Task13 />} />
          <Route exact path='/task_14' element={<Task14 />} />
          <Route exact path='/task_15' element={<Task15 />} />

          
        </Routes>


      </div>

    </Router>
  );
}

export default App;
