import React, { useState } from "react";
import SooratRehmanRamzan2024 from "./Results/SooratRehmanRamzan2024";
import Darood from "../../Darood/Darood";
import "../css/quiz.css";

function IndividualResult() {
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [notes, setNotes] = useState(jsonData); // Set notes state with imported data
  const [filteredNotes, setFilteredNotes] = useState([]);

  const handleFilter = (event) => {
    event.preventDefault();
    const filtered = SooratRehmanRamzan2024.filter(
      (note) => note.phoneNumber === phoneNumber
    ); // Change 'phone' to the correct key in your JSON data
    setFilteredNotes(filtered);
  };

  return (
    <>
      <form onSubmit={handleFilter} className="studentResult">
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder="Enter your phone number"
        />
        <button type="submit" className="btn">
          Check Results
        </button>
      </form>

      {filteredNotes.length > 0 ? (
        <section className="student">
          <div className="box-container" style={{ marginTop: "0" }}>
            {filteredNotes.map((note) => (
              <div key={note._id} className="data">
                <Darood />
                <p className="card">Phone Number: {note.phoneNumber}</p>{" "}
                {/* Change 'phone' to the correct key in your JSON data */}
                <p className="card">Name: {note.name}</p>
                <p className="card">City: {note.city}</p>
                <p className="card">Obtained Marks: {note.obtainedMarks}</p>
                <p className="card">
                  Total Marks: 25
                </p>
                <p className="card" style={{ color: "yellow" }}>
                  Congratulations! You got {note.rank} position
                </p>
                {note.questionResults.map((question, index) => (
                  <div key={question._id} className="questionWise">
                    <h3>Question No: {index + 1} </h3>
                    <p className="answers">Question: {question.question}</p>
                    <p className="answers">
                      Your Answer: {question.selectedAnswer}
                    </p>
                    <p className="answers">
                      Correct Answer: {question.correctAnswer}
                    </p>
                    {question.selectedAnswer === question.correctAnswer ? (
                      <p className="answers">
                        <span style={{ color: "green" }}>&#10004;</span>
                      </p>
                    ) : (
                      <p className="answers">
                        <span style={{ color: "red" }}>&#10006;</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

export default IndividualResult;
