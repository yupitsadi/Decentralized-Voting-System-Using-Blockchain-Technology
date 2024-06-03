import "./Connected.css";
import React from "react";
import "../Finished/Finished.css";

const Connected = (props) => {
  const propscandidates = [
    {
      index: 0,
      name: "Anuj",
      voteCount: 2,
    },
    {
      index: 1,
      name: "Akshit",
      voteCount: 0,
    },
    {
      index: 2,
      name: "Abhinav",
      voteCount: 0,
    },
    {
      index: 3,
      name: "Deepanshu",
      voteCount: 0,
    },
  ];
  return (
    <div className="connected-container">
      <h1 className="connected-header">You are Connected to Metamask...</h1>
      <p className="connected-account" style={{ marginTop: "0" }}>
        Metamask Account:{" "}
        <span style={{ fontWeight: "bold" }}>{props.account}</span>
      </p>
      <p className="connected-account" style={{ marginTop: "0" }}>
        Remaining Time:{" "}
        <span style={{ fontWeight: "bold" }}>{props.remainingTime}</span>
      </p>
      {props.showButton ? (
        <p className="connected-account">You have already voted</p>
      ) : (
        <div className="vote-container">
          <input
            type="number"
            className="vote-input"
            placeholder="Entern Candidate Index"
            value={props.number}
            onChange={props.handleNumberChange}
          ></input>
          <br />
          <button className="login-button" onClick={props.voteFunction}>
            Vote
          </button>
        </div>
      )}

      <table id="myTable" className="candidates-table" style={{ width: "60%" }}>
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
    </div>
  );
};

export default Connected;
