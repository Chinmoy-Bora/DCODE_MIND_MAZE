import React, { useState, useEffect } from 'react';

const Task10 = () => {
  const [answer10, setAnswer] = useState("");
  const [solved10, setSolved] = useState(false);

  useEffect(() => {
    // Check local storage for solved state
    const solvedState = localStorage.getItem('task10Solved');
    if (solvedState === 'true') {
        setSolved(true);
    }
}, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action

    if (answer10.trim() === "") {
      alert("Enter valid input");
    }

    localStorage.setItem("task5Answer", answer10.trim());
    localStorage.setItem('task10Solved', 'true');
    setSolved(true);
    setAnswer("");
  };

  return (
    <div className="task">
      <h1>Task 10 : The Dull Sword</h1>
      <div className="task_4">
        <p>
          <h2>
            In a quaint town nestled among rolling hills, a heinous crime has
            shaken the community. The victim, a reclusive writer known for
            penning thrilling mysteries, was found lifeless in his study. Only a
            few clues were left behind—a torn page from his latest manuscript, a
            half-empty glass of whiskey, and a faint scent of lavender in the
            air. Amidst whispers of jealousy and hidden motives, can you uncover
            the elusive truth: Who was the last person to see the writer alive?
          </h2>
        </p>
      </div>
      {/* <div className='task_2_img'>
                <img src="/resource/task_5.webp" alt="task5_img" />
                <img src="/resource/task_5_2.webp" alt="task5_img" />
                <img src="/resource/task_5_3.webp" alt="task5_img" />
                <img src="/resource/task_5_4.webp" alt="task5_img" />
            </div> */}
      <h3> WARNING : Time is running out !!!</h3>
      {  solved10 ? (<p className="solved-message">Solved!</p>) :
            (
      <form onSubmit={handleSubmit}>
        <label htmlFor="task10Input"></label>
        <input
          id="task10Input"
          type="text"
          placeholder="Enter your answer"
          value={answer10}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
            )}
    </div>
  );
};

export default Task10;
