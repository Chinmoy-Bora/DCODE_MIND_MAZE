import React, { useState } from 'react';

const Task11 = () => {
    const [answer11, setAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        // Save the answer to local storage
        if (answer11.trim() === "") {
            alert("Enter valid input");
        }
        else if (answer11.trim() === "team") {

            localStorage.setItem('task15Answer', answer11.trim());
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
            <h1>Task 11 : Luminous Pathways</h1>
            
            <h2>Adhering to subtle brightness regulations is key in the digital realm.<br></br> Accessing guidelines through a link enhances clarity in navigation.<br></br> Embracing these rules subtly illuminates online experiences, <br></br>fostering a brighter atmosphere.</h2>
            <div className='task_11'>
                 <img src="/resource/task_11_img.png" alt="task2_img" />
            </div>
                
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
                <label htmlFor="task11Input"></label>
                <input
                    id="task11Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer11}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Task11;