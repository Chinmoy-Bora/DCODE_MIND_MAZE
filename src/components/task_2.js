import React, { useState, useEffect } from 'react';

const Task2 = () => {
   
    const [solved2, setSolved] = useState(false);
    const [answer2, setAnswer] = useState('');

    useEffect(() => {
        // Check local storage for solved state
        const solvedState = localStorage.getItem('task2Solved');
        if (solvedState === 'true') {
            setSolved(true);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        if (answer2.trim() === "") {
            alert("Enter valid input");
        }
        else if (answer2.trim() !== "code compete excel") {
            alert("Wrong answer");
            setAnswer('');
        }
        else {

            localStorage.setItem('task2Answer', answer2.trim());
            localStorage.setItem('task2Solved', 'true');
            setSolved(true);
            
        }

        setAnswer('')
    };

    return (
        <div className="task">
            <h1>Task 2 : Disposition Blend</h1>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            <div className='task_2_img'> <img src="/resource/Compete.png" alt="task2_img" />
                <img src="/resource/Excel.png" alt="task2_img" />
                <img src="/resource/Code.png" alt="task2_img" />
            </div>
            <h3>WARNING : Be careful while typing !!!</h3>
            {  solved2 ? (<p className="solved-message">Solved!</p>) : 
           ( <form onSubmit={handleSubmit} >
                <label htmlFor="task2Input"></label>
                <input
                    id="task2Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer2}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    );
}

export default Task2;