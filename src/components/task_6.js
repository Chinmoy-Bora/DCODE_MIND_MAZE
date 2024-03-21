import React, { useState, useEffect } from 'react';

const Task6 = () => {
    const [answer6, setAnswer] = useState('');
    const [solved6, setSolved] = useState(false);

    useEffect(() => {
        // Check local storage for solved state
        const solvedState = localStorage.getItem('task6Solved');
        if (solvedState === 'true') {
            setSolved(true);
        }
    }, []);
    

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action
        const result =answer6.trim();

        if (result === "") {
            alert("Enter valid input");
        }
        else if (result.includes("fission") === true ) {

            localStorage.setItem('task6Answer', answer6.trim());
            localStorage.setItem('task6Solved', 'true');
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
            <h1>Task 6 : The Tsar</h1>
            <h2>The intricate mechanism characterizes the intricate division of a complex structure, yielding substantial energy and instigating a labyrinthine sequence of subsequent events, whose ramifications challenge the very fabric of scientific understanding and human perception</h2>
            <div className='task_6_aud'>
                <audio src="/resource/Op_cut.mp3" controls />


            </div>
            <h3>Sometimes, listening to music is really all you need.Soo soothing...</h3>
            {  solved6 ? (<p className="solved-message">Solved!</p>) :
            (
            <form onSubmit={handleSubmit} >
                <label htmlFor="task6Input"></label>
                <input
                    id="task6Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer6}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    );
}

export default Task6;