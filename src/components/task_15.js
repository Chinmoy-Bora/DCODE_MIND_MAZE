import React, { useState } from 'react';

const Task15 = () => {
    const [answer15, setAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        // Save the answer to local storage
        if (answer15.trim() === "") {
            alert("Enter valid input");
        }
        else if (answer15.trim() === "science") {

            localStorage.setItem('task15Answer', answer15.trim());
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
            <h1>Task 15 : Innovation | Knowledge | Progress</h1>
            <h2>" There's one thing that has influenced me the most,<br></br>
                History,Language and Literature has made my brain roast,<br></br>
                But I love that one subject that Debunks ghosts,<br></br>
                and taught me about atoms, planets and cellulose <br></br>
                Can you guess the subject I love the most ???"</h2>
            {/* <div className='task_8_vid'>
                <video controls >
                    <source src="/resource/Vid1.mp4" type="video/mp4" />
                </video>
                <video controls >
                    <source src="/resource/Vid2.mp4" type="video/mp4" />
                </video>
                <video controls >
                    <source src="/resource/Vid3.mp4" type="video/mp4" />
                </video>


            </div> */}

            <form onSubmit={handleSubmit} >
                <label htmlFor="task15Input"></label>
                <input
                    id="task15Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer15}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Task15;