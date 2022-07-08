import React from "react";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="Overview">
      <h1 id="city">New York</h1>
      <ul>
        <li>
          Last updated: Tuesday 10:00 <span id="date"></span>
        </li>
        <li id="description">Scattered clouds</li>
      </ul>
    </div>
  );
}
