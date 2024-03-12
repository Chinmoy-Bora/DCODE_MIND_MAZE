import React, { useState } from 'react';

const Task1 = () => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        // Save the answer to local storage
        if (answer.trim() === "") {
            alert("Enter valid input");
        }
        else if (answer.trim() === "time") {

            localStorage.setItem('task1Answer', answer.trim());
            
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
            <h1>Task 1 : Erosion</h1>
            <p><h2>" Moments corrode, fading objects, fraying bonds, and dimming memories, reminding us of life's impermanence, yet urging us to cherish each fleeting instant "</h2></p>
            <div className='task_2_img' >
                <img src="/resource/task_1_img.jpg" alt="task1_img" style={{ width: "30%" }} />
                <img src="/resource/task_1_img_2.jpeg" alt="task1_img" style={{ width: "30%" }} />
            </div>
            <div className='task_6_aud'>
                <audio src="/resource/task_1_aud.m4a" controls />


            </div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="task1Input"></label>
                <input
                    id="task1Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Task1;
