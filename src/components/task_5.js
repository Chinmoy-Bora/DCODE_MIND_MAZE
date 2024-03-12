import React, { useState } from 'react';

const Task5 = () => {
    const [answer5, setAnswer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        if (answer5.trim() === "") {
            alert("Enter valid input");
        }
        else if (answer5.trim() !== "alfred") {
            alert("Wrong answer");
        }
        else {

            localStorage.setItem('task5Answer', answer5.trim());
            setAnswer('')
        }

        setAnswer('')
    };

    return (
        <div className="task">
            <h1>Task 5 : A friend in need is a friend indeed</h1>
            <p><h2>
                Alice, Ben, and Clara became friends at a café in Brookside. Alice painted, Ben created, and Clara cared for others. When Alice's studio burned down, Ben and Clara helped her rebuild. They learned that true friends stand by you through tough times. In their little world, they realized that <b><i style={{color:"#db7858"}}>common friends</i></b> are the most important ones..</h2></p>
            <div className='task_2_img'>
                <img src="/resource/task_5.webp" alt="task5_img" />
                <img src="/resource/task_5_2.webp" alt="task5_img" />
                <img src="/resource/task_5_3.webp" alt="task5_img" />
                <img src="/resource/task_5_4.webp" alt="task5_img" />
            </div>
            <h3> TIPS : Reading Sometime helps</h3>
            <form onSubmit={handleSubmit} >
                <label htmlFor="task5Input"></label>
                <input
                    id="task5Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer5}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Task5;