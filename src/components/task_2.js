import React, { useState } from 'react';

const Task2 = () => {
    const [answer2, setAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        if(answer2.trim()==="")
        {
            alert("Enter valid input");
        }
        else{

            localStorage.setItem('task1Answer', answer2.trim());
        }
    };

    return (
        <div className="task">
            <h1>Task 2 : Disposition Blend</h1>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
           <div className='task_2_img'> <img src="/resource/Compete.png" alt="task2_img"  />
            <img src="/resource/Excel.png" alt="task2_img"  />
            <img src="/resource/Code.png" alt="task2_img"  />
            </div>
            <h3>WARNING : Be careful while typing !!!</h3>
            <form onSubmit={handleSubmit} >
                <label htmlFor="task2Input">Task 2 Answer:</label>
                <input 
                    id="task2Input" 
                    type="text" 
                    placeholder="Enter your answer" 
                    value={answer2} 
                    onChange={(e) => setAnswer(e.target.value)}
                    
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Task2;