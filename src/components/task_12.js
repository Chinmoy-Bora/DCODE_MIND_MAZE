import React, { useState, useEffect } from 'react';

const Task12 = () => {
  const [answer12, setAnswer] = useState("");
  const [solved12, setSolved] = useState(false);

  useEffect(() => {
    // Check local storage for solved state
    const solvedState = localStorage.getItem('task12Solved');
    if (solvedState === 'true') {
        setSolved(true);
    }
}, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action

    // Save the answer to local storage
    if (answer12.trim() === "") {
      alert("Enter valid input");
    } 
    else if (answer12.trim() === "phoenix") {
      localStorage.setItem("task12Answer", answer12.trim());
      localStorage.setItem('task12Solved', 'true');
      setSolved(true);

      setAnswer("");
    } else {
      alert("Wrong answer !!!");
    }

    // Reset the answer
    setAnswer("");
  };

  return (
    <div className="task">
      <h1>Task 12 : Sad Johnny</h1>
      <p>
        <h2>
          "Rain, rain, go away,
           Come again another day.<br></br>
        Little johnny wants to play,
           Rain, rain, go away. "
        </h2>
      </p>
      <div className="task_2_img">
        <img src="/resource/task_12.webp" alt="task1_img" />
        {/* <img src="/resource/task_1_img_2.jpeg" alt="task1_img" /> */}
      </div>
      <div className="task_6_aud">
        <audio src="/resource/phoenix-ult.mp3" controls />
      </div>
      {  solved12 ? (<p className="solved-message">Solved!</p>) :
            (

      <form onSubmit={handleSubmit}>
        <label htmlFor="task12Input"></label>
        <input
          id="task12Input"
          type="text"
          placeholder="Enter your answer"
          value={answer12}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>)}


    </div>
  );
};

export default Task12;
