import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [utitle,setUtitle] = useState(props.title);
  const [ustatus, seUstatus] = useState(props.status);
  const [utype, setUtype] = useState(props.type);
  const [udescription, setUdescription] = useState(props.description);
  const [udate, setUdate] = useState(props.date);
  const [id, setId] = useState(props.id);
  const [dropdown,setDropdown] = useState(false);
  
  const clickHandler = () => {
    setId(props.id);
    const updatedProject = {
      id: id,
      title: utitle,
      type: utype,
      date: new Date(udate),
      status: ustatus,
      description: udescription,
    };
    props.updateDataProp(updatedProject);
  }

  const dropdownClickHandler = () => {
    setDropdown(!dropdown);
    console.log("dropdownClickHandler clicked!",props.description);
  }

  const updateTitleHandler = (event) => {
    setUtitle(event.target.value);
  };

  const updateStatusHandler = (event) => {
    seUstatus(event.target.value);
  };

  const updateTypeHandler = (event) => {
    setUtype(event.target.value);
  };

  const updateDateHandler = (event) => {
    setUdate(event.target.value);
  };

  const updateDescriptionHandler = (event) => {
    setUdescription(event.target.value);
  };

  const deleteHandler = () => {
    console.log("delete!");
    setId(props.id);
    props.deleteElement(id);
  };

  console.log("props",props);

  return (
    <div>
      {!dropdown && (
        <div className="expense-item">
          <div>
            <ExpenseDate date={props.date}></ExpenseDate>
          </div>
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <h2>{props.status}</h2>
            <div className="expense-item__price">{props.type}</div>
            <button
              onClick={dropdownClickHandler}
              style={{ backgroundColor: "#252525" }}
            >
              <h2>&dArr;</h2>
            </button>
          </div>
        </div>
      )}

      {dropdown && (
        <div>
          <div className="expense-item" onClick={dropdownClickHandler}>
            <div>
              <ExpenseDate date={props.date}></ExpenseDate>
            </div>
            <div className="expense-item__description">
              <h2>{props.title}</h2>
              <h2>{props.status}</h2>
              <div className="expense-item__price">{props.type}</div>
              <button
                onClick={dropdownClickHandler}
                style={{ backgroundColor: "#4b4b4b" }}
              >
                <h2>&uArr;</h2>
              </button>
            </div>
          </div>
          <div className="expense-item-dropdown" style={{ display: "block" }}>
            <label>Name: </label>
            <input
              type="text"
              defaultValue={props.title}
              onChange={updateTitleHandler}
            ></input>

            <label>Status: </label>
            <input
              type="text"
              defaultValue={props.status}
              onChange={updateStatusHandler}
            ></input>
            <br></br>
            <label>Type: </label>
            <input
              type="text"
              defaultValue={props.type}
              onChange={updateTypeHandler}
            ></input>

            <label>Expected Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              defaultValue={props.date}
              onChange={updateDateHandler}
            ></input>
          </div>
          <div className="expense-item-dropdown" style={{ display: "block" }}>
            <textarea
              placeholder="Add links and socials..."
              id="info"
              name="story"
              rows="5"
              cols="50"
              defaultValue={props.description}
              onChange={updateDescriptionHandler}
            ></textarea>
            <button
              className="expense-item__update"
              onClick={clickHandler}
              style={{ float: "right", cursor: "pointer", marginLeft: "4px" }}
            >
              Update
            </button>
            <button
              className="expense-item__update"
              onClick={deleteHandler}
              style={{ float: "right", cursor: "pointer" }}
            >
              <span style={{fontSize:"17px"}} className="fa">
                &#xf014;
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseItem;
