import React, { useState } from 'react';

const Task1 = () => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        // Save the answer to local storage
        if(answer.trim()==="")
        {
            alert("Enter valid input");
        }
        else{

            localStorage.setItem('task1Answer', answer.trim());
        }

        // Reset the answer
        setAnswer('');
    };

    return (
        <div className="task">
            <h1>Task 1:</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <img src="/resource/download.jpeg" alt="task1_img"  />
            <form onSubmit={handleSubmit} >
                <label htmlFor="task1Input">Task 1 Answer:</label>
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
