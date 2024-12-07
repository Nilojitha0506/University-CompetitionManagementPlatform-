import React, { useState } from "react";
import "./Path.css";

const UniversityCompetitions = () => {
  const [selectedCompetition, setSelectedCompetition] = useState("");

  const handleChange = (event) => {
    setSelectedCompetition(event.target.value);
  };

  return (
    <div>
      <label htmlFor="competitions">Select Competition Type:</label>
      <select
        id="competitions"
        value={selectedCompetition}
        onChange={handleChange}
      >
        <option
          value="Science and Technology Competitions
"
        >
          Science and Technology Competitions
        </option>
        <option value="Engineering Challenges">Engineering Challenges</option>
        <option
          value="Business and Entrepreneurship Competitions
"
        >
          Business and Entrepreneurship Competitions
        </option>
        <option value="Hackathons">Hackathons</option>
        <option value="Research and Innovation Competitions">
          Research and Innovation Competitions
        </option>
        <option value="Design Competitions">Design Competitions</option>
        <option
          value="Public Speaking and Debate Competitions
"
        >
          Public Speaking and Debate Competitions
        </option>
        <option value="Mathematics and Logic Competitions">
          Mathematics and Logic Competitions
        </option>
      </select>
      <div>
        <button type="submit">
          <p>You selected: {selectedCompetition}</p>
        </button>
      </div>
    </div>
  );
};

export default UniversityCompetitions;
