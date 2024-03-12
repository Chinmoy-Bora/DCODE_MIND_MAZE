import React from 'react';

import { Link } from 'react-router-dom';
import Savepdf from './savepdf';
import Footer from './footer';


const Button = () => {


  return (
    <div>

      <div className="button-container">


        <Link to='/task_1'><button>Task 1</button></Link>
        <Link to='/task_2'><button>Task 2</button></Link>
        <Link to='/task_3'><button>Task 3</button></Link>
        <Link to='/task_4'><button>Task 4</button></Link>
        <Link to='/task_5'><button>Task 5</button></Link>

        <Link to='/task_6'><button>Task 6</button></Link>
        <Link to='/task_7'><button>Task 7</button></Link>
        <Link to='/task_8'><button>Task 8</button></Link>
        <Link to='/task_9'><button>Task 9</button></Link>
        <Link to='/task_10'><button>Task 10</button></Link>

        <Link to='/task_11'><button>Task 11</button></Link>
        <Link to='/task_12'><button>Task 12</button></Link>
        <Link to='/task_13'><button>Task 13</button></Link>
        <Link to='/task_14'><button>Task 14</button></Link>
        <Link to='/task_15'><button>Task 15</button></Link>



      </div>
      <Savepdf />
      <Footer />

    </div>

  );

}

export default Button;