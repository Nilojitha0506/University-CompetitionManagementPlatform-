import React from "react";
import "./Competitions01.css";

function Competition01() {
  const registerNow = () => {
    window.location.href = "https://www.codeclash2024.com";
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🚀 Code Clash 2024: Where Innovators Compete!</h1>
      </header>

      <div className="container">
        <p>
          <span className="highlight">🗓 Date:</span> March 15–16, 2024
        </p>
        <p>
          <span className="highlight">⏰ Time:</span> 10:00 AM to 5:00 PM
        </p>
        <p>
          <span className="highlight">📍 Location:</span> Online via HackerRank
        </p>
        <h2>🎯 Who Can Participate?</h2>
        <p>
          Open to <span className="highlight">students and professionals</span>{" "}
          globally.
        </p>
        <p>
          Participate <span className="highlight">solo</span> or in{" "}
          <span className="highlight">teams of up to 4 members</span>.
        </p>

        <h2>🔗 Registration Details</h2>
        <p>
          <span className="highlight">Fee:</span> Free!
        </p>
        <p>
          <span className="highlight">Deadline:</span> March 10, 2024
        </p>
        <div className="registercom">
          <button onClick={registerNow}>Register Now</button>
        </div>

        <div className="qr-code">
          <p>Or scan the QR code to register:</p>
          <img src="https://via.placeholder.com/150" alt="QR Code" />
        </div>
      </div>
    </div>
  );
}

export default Competition01;
