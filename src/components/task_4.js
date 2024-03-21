import React, { useState, useEffect } from 'react';

const Task4 = () => {
    const [answer4, setAnswer] = useState('');
    const [solved4, setSolved] = useState(false);

    useEffect(() => {
        // Check local storage for solved state
        const solvedState = localStorage.getItem('task4Solved');
        if (solvedState === 'true') {
            setSolved(true);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action

        if (answer4.trim() === "") {
            alert("Enter valid input");
        }
        else if (answer4.trim() !== "blank space") {
            alert("Wrong answer");
        }
        else {

            localStorage.setItem('task4Answer', answer4.trim());
            localStorage.setItem('task4Solved', 'true');
            setSolved(true);
            setAnswer('')
        }

        setAnswer('')
    };

    return (
        <div className="task">
            <h1>Task 4 : 1989</h1>
            <div className='task_4'>
                <p><h2>
                    Briella Locke was once hailed as the rising star of the music industry. her melodious voice  <i>enchanted</i> Audiences worldwide, catapulting her to the zenith of fame. yet as swiftly as her stardom soared, it plummeted with a scandal that tarnished her reputation. for years, she languished in obscurity, grappling with self-doubt and despair. however, amidst the darkness, briella found solace in her unwavering love for music. with relentless determination and tireless perseverance, she honed her craft, pouring her heart and soul into each Note, increasing her Knowledge each and every day. She sought guidance from seasoned mentors, fine-tuning her skills and embracing new artistic expressions. her journey through the valleys of adversity only fueled her Passion, igniting a fire within her that burned brighter than ever before. And when the world least expected it, briella emerged from the shadows, her voice stronger, her spirit unbreakable, Captivating audiences anew with her unparalleled talent and resilience. her story became an inspiring testament to the transformative power of perseverance and the Enduring strength of the human spirit.</h2></p>
            </div>
            {/* <div className='task_2_img'>
                <img src="/resource/task_5.webp" alt="task5_img" />
                <img src="/resource/task_5_2.webp" alt="task5_img" />
                <img src="/resource/task_5_3.webp" alt="task5_img" />
                <img src="/resource/task_5_4.webp" alt="task5_img" />
            </div> */}
            <h3> TIPS : Read Read Read and repeat...</h3>
            {  solved4 ? (<p className="solved-message">Solved!</p>) :
            (<form onSubmit={handleSubmit} >
                <label htmlFor="task4Input"></label>
                <input
                    id="task4Input"
                    type="text"
                    placeholder="Enter your answer"
                    value={answer4}
                    onChange={(e) => setAnswer(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    );
}

export default Task4;