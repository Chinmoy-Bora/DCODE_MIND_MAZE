import React, { useState, useEffect } from "react";

const Task15 = () => {
  const [answer15, setAnswer] = useState("");

  const [solved15, setSolved] = useState(false);

  useEffect(() => {
    // Check local storage for solved state
    const solvedState = localStorage.getItem("task15Solved");
    if (solvedState === "true") {
      setSolved(true);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action

    // Save the answer to local storage
    if (answer15.trim() === "") {
      alert("Enter valid input");
    } else if (answer15.trim() === "experience") {
      localStorage.setItem("task15Answer", answer15.trim());
      localStorage.setItem("task15Solved", "true");
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
      <h1>Task 15 : Le Chiffre Indechiffrable</h1>

      <h2>
        Xy tnqs nwjxs, he rmaiv xddx a rwt fn xmreoxa. Blb, wjepromntm ae ise
        hmsk bwmrsex. Mxgmjutyck qs rtka ise gvsnmj.
      </h2>

      {/* <div className='task_8_vid'>
                <video controls >
                    <source src="/resource/Vid1.mp4" type="video/mp4" />
                </video>
                <video controls >
                    <source src="/resource/Vid2.mp4" type="video/mp4" />
                </video>
                <video controls >
                    <source src="/resource/Vid3.mp4" type="video/mp4" />
                </video>
                
            </div> */}
      <h3>TIP : Use rulebook for HINT</h3>
      {solved15 ? (
        <p className="solved-message">Solved!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="task15Input"></label>
          <input
            id="task15Input"
            type="text"
            placeholder="Enter your answer"
            value={answer15}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Task15;
