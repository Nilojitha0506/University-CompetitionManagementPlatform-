import React, { useState } from "react";
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
      <a
        href="https://medusa.ecsc-uok.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Please Refer Here
      </a>,
    ],
    [
      "Medusa",
      "University of Colombo",
      <a
        href="https://medusa.ecsc-uok.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Please Refer Here
      </a>,
    ],
    ["IIT", "University of Peradeniya", "Some other detail"],
    ["Competition 6 Details", "University of Kelaniya", "Some other detail"],
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
