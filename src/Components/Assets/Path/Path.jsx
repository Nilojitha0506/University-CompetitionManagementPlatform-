import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Path.css";

const UniversityCompetitions = () => {
  const [selectedCompetition, setSelectedCompetition] = useState(
    "Engineering Challenges"
  );
  const [submittedSelection, setSubmittedSelection] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    setSelectedCompetition(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedSelection(selectedCompetition);

    // Navigate to a new page based on the selected competition
    if (selectedCompetition === "Science and Technology Competitions") {
      navigate("/SciTech"); // Change the route as needed
    }
    // You can add more conditions for other competitions if needed
  };

  return (
    <div>
      <label htmlFor="competitions">Select Competition Type:</label>
      <select
        id="competitions"
        value={selectedCompetition}
        onChange={handleChange}
      >
        <option value="Engineering Challenges">Engineering Challenges</option>
        <option value="Business and Entrepreneurship Competitions">
          Business and Entrepreneurship Competitions
        </option>
        <option value="Science and Technology Competitions">
          Science and Technology Competitions
        </option>
        <option value="Hackathons">Hackathons</option>
        <option value="Research and Innovation Competitions">
          Research and Innovation Competitions
        </option>
        <option value="Design Competitions">Design Competitions</option>
        <option value="Public Speaking and Debate Competitions">
          Public Speaking and Debate Competitions
        </option>
        <option value="Mathematics and Logic Competitions">
          Mathematics and Logic Competitions
        </option>
      </select>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit Selection
        </button>
      </div>
      {submittedSelection && (
        <div>
          <button type="submit">You selected: {submittedSelection}</button>
        </div>
      )}
    </div>
  );
};

export default UniversityCompetitions;
