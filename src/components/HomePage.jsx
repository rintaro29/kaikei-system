import React, { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [year, setYear] = useState("2015");

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const years = Array.from({ length: 9 }, (_, i) => 2015 + i); // Generate years from 2015 to 2023

  return (
    <div className="homePage">
      <div className="homePageTitle">購入品情報</div>
      <div className="yearSelector">
        <label htmlFor="year">年を選択:</label>
        <select name="year" id="year" value={year} onChange={handleYearChange}>
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HomePage;
