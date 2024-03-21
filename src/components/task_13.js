import React, { useState, useEffect } from 'react';

const Task13 = () => {
    const [answer13, setAnswer] = useState('');
    const [solved13, setSolved] = useState(false);

    useEffect(() => {
      // Check local storage for solved state
      const solvedState = localStorage.getItem('task13Solved');
      if (solvedState === 'true') {
          setSolved(true);
      }
  }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        if (answer13.trim() === "") {
            alert("Enter valid input");
        }
        else if (answer13.trim() !== "gm7b5") {
            alert("Wrong answer");
            setAnswer('');
        }
        else {

            localStorage.setItem('task13Answer', answer13.trim());
            localStorage.setItem('task13Solved', 'true');
            setSolved(true);

        }

        setAnswer('')
    };

    return (
        <div className="task">
            <h1>Task 13 : Piano Man</h1>
            <p><h2>Piano chords form the harmonic basis of Western music, crafted by playing multiple notes together for a rich sound. Mastery of chords is vital for pianists, composers, and musicians, offering depth and complexity to their craft.</h2></p>
            <div className='task_13_img'>
                <img src="/resource/gm7b5.png" alt="task2_img" />
                {/* <audio src="/resource/task_7_aud.mp3" controls /> */}
            </div>

            {/* <h3>WARNING : Be careful while typing !!!</h3> */}
            {  solved13 ? (<p className="solved-message">Solved!</p>) :
            (

            <form onSubmit={handleSubmit} >
                <label htmlFor="task13Input"></label>
                <input
                    id="task13Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer13}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    );
}

export default Task13;