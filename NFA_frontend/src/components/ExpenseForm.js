import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newtitle, setTitle] = useState("");
  const [newtype, setType] = useState("Nodes");
  const [newdate, setDate] = useState("");
  const [newstatus, setStatus] = useState("Check on expected date");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setType(event.target.value);
    console.log("type", event.target.value);
  };

  const statusChangeHandler = (event) => {
    setStatus(event.target.value);
    console.log("status", event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
    console.log("setDescription", event.target.value);
  };

  const submitform = (event) => {
    event.preventDefault();
    const newProject = {
      title: newtitle,
      type: newtype,
      date: new Date(newdate),
      status: newstatus,
      description: description,
    };
    console.log("newProject", newProject);
    props.onSaveData(newProject);
    setTitle("");
    setType("Nodes");
    setStatus("Check on expected date");
    setDate("");
  };

  return (
    <form onSubmit={submitform}>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>Name</label>
        <input
          type="text"
          value={newtitle}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div className="new-expense__control">
        <label>Type</label>
        <select name="Select type" id="types" onChange={typeChangeHandler}>
          <option value="Nodes">Nodes</option>
          <option value="DAO">DAO</option>
          <option value="Farming">Farming</option>
          <option value="PlayToEarn">PlayToEarn</option>
          <option value="Financials">Financials</option>
        </select>
      </div>

      <div className="new-expense__control">
        <label>Expected Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={newdate}
          onChange={dateChangeHandler}
        ></input>
      </div>

      <div className="new-expense__control">
        <label>Status</label>
        <select name="Select type" id="types" onChange={statusChangeHandler}>
          <option value="Check on expected date">Check on expected date</option>
          <option value="Released">Released</option>
          <option value="Rugged">Rugged</option>
        </select>
      </div>
      <div className="new-expense__control">
        <label>Add Links and socials</label>
        <textarea
          placeholder="More info....."
          rows="5"
          cols="50"
          onChange={descriptionChangeHandler}
        ></textarea>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelButton}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
