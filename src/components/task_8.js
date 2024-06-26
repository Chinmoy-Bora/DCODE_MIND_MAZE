
import React, { useState, useEffect } from 'react';

const Task8 = () => {
    const [answer8, setAnswer] = useState('');
    const [solved8, setSolved] = useState(false);

    useEffect(() => {
        // Check local storage for solved state
        const solvedState = localStorage.getItem('task8Solved');
        if (solvedState === 'true') {
            setSolved(true);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        // Save the answer to local storage
        if (answer8.trim() === "") {
            alert("Enter valid input");
        }
        else if (answer8.trim() === "stockholm syndrome") {

            localStorage.setItem('task8Answer', answer8.trim());
            localStorage.setItem('task8Solved', 'true');
            setSolved(true);
            setAnswer('');
        }
        else {
            alert("Wrong answer !!!");
        }

        // Reset the answer
        setAnswer('');
    };

    return (
        <div className="task">
            <h1>Task 8 : Tillgivenhet I Fångenskap</h1>
            <h2>" Across three scenes,a story weaves,<br></br>
                Silent tales that the eye perceives.<br></br>
                Though each path diverges in the light,<br></br>
                Together, they whisper a shared insight. "</h2>
            <div className='task_8_vid'>
                <video controls >
                    <source src="/resource/Vid1.mp4" type="video/mp4" />
                </video>
                <video controls >
                    <source src="/resource/Vid2.mp4" type="video/mp4" />
                </video>
                <video controls >
                    <source src="/resource/Vid3.mp4" type="video/mp4" />
                </video>


            </div>
            {  solved8 ? (<p className="solved-message">Solved!</p>) :
            (

            <form onSubmit={handleSubmit} >
                <label htmlFor="task8Input"></label>
                <input
                    id="task8Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer8}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    );
}

export default Task8;