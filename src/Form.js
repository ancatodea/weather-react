import React, {useState} from "react";
import axios from "axios";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form" 
      className="mb-3"
      onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              id="city-input"
              onChange={changeCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 "
            />
          </div>
        </div>
      </form>
    </div>
  );
}
