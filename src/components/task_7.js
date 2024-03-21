import React, { useState, useEffect } from 'react';

const Task7 = () => {
    const [answer7, setAnswer] = useState('');
    const [solved7, setSolved] = useState(false);

    useEffect(() => {
        // Check local storage for solved state
        const solvedState = localStorage.getItem('task7Solved');
        if (solvedState === 'true') {
            setSolved(true);
        }
    }, []);
    

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        if (answer7.trim() === "") {
            alert("Enter valid input");
        }
        else if (answer7.trim() !== "mac os") {
            alert("Wrong answer");
            setAnswer('');
        }
        else {

            localStorage.setItem('task7Answer', answer7.trim());
            localStorage.setItem('task7Solved', 'true');
            setSolved(true);

        }

        setAnswer('')
    };

    return (
        <div className="task">
            <h1>Task 7 : Doctor's Nightmare</h1>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            <div className='task_7_img'>
                <img src="/resource/task_7.png" alt="task2_img" />
                <audio src="/resource/task_7_aud.mp3" controls />
            </div>

            {/* <h3>WARNING : Be careful while typing !!!</h3> */}
            {  solved7 ? (<p className="solved-message">Solved!</p>) :
            (
            <form onSubmit={handleSubmit} >
                <label htmlFor="task7Input"></label>
                <input
                    id="task7Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer7}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    );
}

export default Task7;