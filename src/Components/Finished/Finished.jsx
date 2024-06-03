import "./Finished.css";
import React, { useEffect, useState } from "react";

const Finished = (props) => {
  const [showResult, setShowResult] = useState(false);
  const [winner, setWinner] = useState(props.candidates[0].name);

  const handleShowResult = () => {
    setShowResult(true);
  };

  useEffect(() => {
    let highestVotes = props.candidates[0].voteCount;

    for (let i = 1; i < props.candidates.length; i++) {
      if (props.candidates[i].voteCount > highestVotes) {
        setWinner(props.candidates[i].name);
      }
    }
  });

  return (
    <div className="finished-container">
      <div className="finished-left-container">
        {!showResult ? (
          <div>
            <h1 className="welcome-message">Thankyou for Voting...</h1>
            <button className="finished-button" onClick={handleShowResult}>
              View Result
            </button>
          </div>
        ) : (
          <div className="result-container">
            <p style={{ fontWeight: "bold" }}>Result Details...</p>
            <table id="myTable" className="candidates-table">
              <thead>
                <tr className="candidate-table-title">
                  <th className="candidate-title">Index</th>
                  <th className="candidate-title">Candidate name</th>
                  <th className="candidate-title">Candidate votes</th>
                </tr>
              </thead>
              <tbody>
                {props.candidates.map((candidate, index) => (
                  <tr key={index} className="candidate-table-value">
                    <td className="candidate-value">{candidate.index}</td>
                    <td className="candidate-value">{candidate.name}</td>
                    <td className="candidate-value">{candidate.voteCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: "x-large", marginBottom: "0" }}>
              And the winner is:
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "x-large",
                marginTop: "0.5rem",
              }}
            >
              {winner}
            </p>
          </div>
        )}
      </div>
      <div className="finished-right-container"></div>
    </div>
  );
};

export default Finished;
