import React, { useState, useEffect } from 'react';

const Task11 = () => {
  const [answer11, setAnswer] = useState("");
  const [solved11, setSolved] = useState(false);

  useEffect(() => {
    // Check local storage for solved state
    const solvedState = localStorage.getItem('task11Solved');
    if (solvedState === 'true') {
        setSolved(true);
    }
}, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action

    // Save the answer to local storage
    if (answer11.trim() === "") {
      alert("Enter valid input");
    } else if (answer11.trim() === "team") {
      localStorage.setItem("task11Answer", answer11.trim());
      localStorage.setItem('task11Solved', 'true');
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
  <h1>Task 11 : Luminous Pathways</h1>

  <h2>
    Adhering to subtle brightness regulations is key in the digital realm.
    <br /> Accessing guidelines through a link enhances clarity in navigation.
    <br /> Embracing these rules subtly illuminates online experiences, <br />
    fostering a brighter atmosphere.
  </h2>
  <div className="task_11">
    <a href="/resource/task_11_img.png" download>
      <img src="/resource/task_11_img.png" alt="task2_img" />
    </a>
  </div>
  {  solved11 ? (<p className="solved-message">Solved!</p>) :
            (

  <form onSubmit={handleSubmit}>
    <label htmlFor="task11Input"></label>
    <input
      id="task11Input"
      type="text"
      placeholder="Enter your answer"
      value={answer11}
      onChange={(e) => setAnswer(e.target.value)}
    />
    <button type="submit">Submit</button>
  </form>
            )}
</div>

  );
};

export default Task11;
