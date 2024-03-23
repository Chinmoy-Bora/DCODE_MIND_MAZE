import React, { useState, useEffect } from "react";

const Task14 = () => {
  const [answer14, setAnswer] = useState("");
  const [solved14, setSolved] = useState(false);

  useEffect(() => {
    // Check local storage for solved state
    const solvedState = localStorage.getItem("task14Solved");
    if (solvedState === "true") {
      setSolved(true);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action

    if (answer14.trim() === "") {
      alert("Enter valid input");
    }
    else if(answer14.trim()!=="momo")
    {
        alert("Wrong answer")
    }

    else{

        localStorage.setItem("task14Answer", answer14.trim());
        localStorage.setItem("task14Solved", "true");
        setSolved(true);
        setAnswer("");
      };
    }


  return (
    <div className="task">
      <h1>Task 14 : Roadside delight</h1>
      <div className="task_4">
        <p>
          <h2>
            In the heat of the chase, amidst competition's call, When energy
            wanes, and spirits may fall. I'm there to revive, a savory delight,
            Midst the quest for victory, I offer respite.
          </h2>
        </p>
      </div>
      {/* <div className='task_2_img'>
                <img src="/resource/task_5.webp" alt="task5_img" />
                <img src="/resource/task_5_2.webp" alt="task5_img" />
                <img src="/resource/task_5_3.webp" alt="task5_img" />
                <img src="/resource/task_5_4.webp" alt="task5_img" />
            </div> */}
      <h3>TIPS : 5 piece in 60 /-</h3>
      {solved14 ? (
        <p className="solved-message">Solved!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="task14Input"></label>
          <input
            id="task14Input"
            type="text"
            placeholder="Enter your answer"
            value={answer14}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Task14;
