import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

    const filterChangeHandler = (event) => {
       props.filterProp(event.target.value);
    }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by month</label>
        <select value={props.deafultSelected} onChange={filterChangeHandler}>
          <option value="00">Jan</option>
    <option value="01">Feb</option>
    <option value="02">Mar</option>
    <option value="03">Apr</option>
    <option value="04">May</option>
    <option value="05">Jun</option>
    <option value="06">Jul</option>
    <option value="07">Aug</option>
    <option value="08">Sep</option>
    <option value="09">Oct</option>
    <option value="10">Nov</option>
    <option value="11">Dec</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
