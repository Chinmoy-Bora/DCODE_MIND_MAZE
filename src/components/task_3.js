import React, { useState, useEffect } from 'react';

const Task3 = () => {
    const [answer3, setAnswer] = useState('');
    const [solved3, setSolved] = useState(false);

    useEffect(() => {
        // Check local storage for solved state
        const solvedState = localStorage.getItem('task3Solved');
        if (solvedState === 'true') {
            setSolved(true);
        }
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        if (answer3.trim() === "") {
            alert("Enter valid input");
        }
        else if (answer3.trim() !== "hello") {
            alert("Wrong answer");
            setAnswer('');
        }
        else {

            localStorage.setItem('task3Answer', answer3.trim());
            localStorage.setItem('task3Solved', 'true');
            setSolved(true);

        }

        setAnswer('')
    };

    return (
        <div className="task">
            <h1>Task 3 : Samuel Morse</h1>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            <div className='task_3_img'>
                <img src="/resource/morse.png" alt="task2_img" />
                {/* <audio src="/resource/task_7_aud.mp3" controls /> */}
            </div>
            {  solved3 ? (<p className="solved-message">Solved!</p>) :

            
           ( <form onSubmit={handleSubmit} >
                <label htmlFor="task3Input"></label>
                <input
                    id="task3Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer3}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
           )}
        </div>
    );
}

export default Task3;