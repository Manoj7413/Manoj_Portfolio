import React, { useState } from "react";

export default function GuessTheNumber() {
  const [secretNumber, setSecretNumber] = useState(generateRandom());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 10");

  function generateRandom() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function handleGuess() {
    const num = parseInt(guess);
    if (isNaN(num)) {
      setMessage("That's not a number! 🤔");
      return;
    }

    if (num === secretNumber) {
      setMessage(`🎉 Correct! It was ${secretNumber}. Try again?`);
      setSecretNumber(generateRandom());
    } else if (num < secretNumber) {
      setMessage("Too low! 🔻");
    } else {
      setMessage("Too high! 🔺");
    }

    setGuess("");
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>🔢 Guess The Number</h2>
      <p>{message}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter number"
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button
        onClick={handleGuess}
        style={{ marginLeft: "10px", padding: "8px 12px" }}
      >
        Guess
      </button>
    </div>
  );
}
