import React, { useState, useEffect } from 'react';

const Task9 = () => {
  const [answer9, setAnswer] = useState("");
  const [solved9, setSolved] = useState(false);

  useEffect(() => {
    // Check local storage for solved state
    const solvedState = localStorage.getItem('task9Solved');
    if (solvedState === 'true') {
        setSolved(true);
    }
}, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action

    if (answer9.trim() === "") {
      alert("Enter valid input");
    } else if (answer9.trim() === "knowledge") {
      localStorage.setItem("task9Answer", answer9.trim());
      localStorage.setItem('task9Solved', 'true');
      setSolved(true);
      setAnswer("");
    }

    setAnswer("");
  };

  return (
    <div className="task">
      <h1>Task 9 : The Dull Sword</h1>
      <div className="task_9">
        <p>
          <h2>
            "Attention! 🚨 Scientists have discovered that forwarding this
            hilarious message to 10 friends can cause uncontrollable laughter
            and may even lead to unexpected good luck! So don't miss out on your
            chance to spread joy and unlock the secret to happiness! Psst...
            Keep an eye out for a hidden <i style={{color:"green"}}>'HINT'</i> within this message 😉🔍"
          </h2>
        </p>
      </div>
         <h1 style={{color:"white"}}>6b6e6f776c65646765</h1>
          <h1 style={{color:'green'}}> Resource 1 : bit.ly/3XXXaXX </h1>
          <h1 style={{color:'green'}}> Resource 2 : </h1>

       <div className='task_2_img'>
                <img src="/resource/task_9.jpeg" alt="task5_img" />
            </div> 
      <h3> WARNING : May be he can help in exchange of XXXT</h3>
      {  solved9 ? (<p className="solved-message">Solved!</p>) :
            (
      <form onSubmit={handleSubmit}>
        <label htmlFor="task9Input"></label>
        <input
          id="task9Input"
          type="text"
          placeholder="Enter your answer"
          value={answer9}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
            )}
    </div>
  );
};

export default Task9;
