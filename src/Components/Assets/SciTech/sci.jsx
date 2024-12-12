import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sci.css";

const SciTech = () => {
  const [searchQueryCategory, setSearchQueryCategory] = useState("");
  const [searchQueryUniversity, setSearchQueryUniversity] = useState("");

  const handleSearchChangeCategory = (event) => {
    setSearchQueryCategory(event.target.value);
  };

  const handleSearchChangeUniversity = (event) => {
    setSearchQueryUniversity(event.target.value);
  };

  const competitions = [
    [
      "Medusa",
      "University of Kelaniya",
      <Link to="/competition01">Please Refer Here</Link>,
    ],
    [
      "Medusa",
      "University of Colombo",
      <Link to="/competition01">Please Refer Here</Link>,
    ],
    ["IIT", "University of Peradeniya", "Some other detail"],
    ["IIT Details", "University of Kelaniya", "Some other detail"],
    ["Competition 7 Details", "University of Moratuwa", "Some other detail"],
  ];

  const filteredCompetitions = competitions.filter((competition) => {
    const categoryMatch = competition.some(
      (detail) =>
        typeof detail === "string" &&
        detail.toLowerCase().includes(searchQueryCategory.toLowerCase())
    );
    const universityMatch = competition.some(
      (detail) =>
        typeof detail === "string" &&
        detail.toLowerCase().includes(searchQueryUniversity.toLowerCase())
    );
    return categoryMatch && universityMatch;
  });

  return (
    <div className="search-container-wrapper">
      <h1>Science and Technology Competitions</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchQueryCategory}
          onChange={handleSearchChangeCategory}
          placeholder="Search Your Category..."
          className="search-bar"
        />
      </div>
      <div className="search-container2">
        <input
          type="text"
          value={searchQueryUniversity}
          onChange={handleSearchChangeUniversity}
          placeholder="Search Your university or institute..."
          className="search-bar"
        />
      </div>

      <div className="search-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order</th>
              <th scope="col">Competition Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompetitions.length > 0 ? (
              filteredCompetitions.map((competitionGroup, index) =>
                competitionGroup.map((competition, subIndex) => (
                  <tr key={`${index}-${subIndex}`}>
                    {subIndex === 0 && (
                      <td rowSpan={competitionGroup.length}>{index + 1}</td>
                    )}
                    <td>{competition}</td>
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan="2">
                  No competitions found matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SciTech;
