import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {

  const [yearSelected, setYearSelected] = useState("00");

const sendSelectedFilter = (selectedFilter) => {
  console.log("received filter", selectedFilter);
  setYearSelected(selectedFilter);
}

const updateDataHandler = (updatedData) => {
  console.log("updatedData", updatedData);
  props.newUpdatedData(updatedData);
};

const deleteHandler = (deleteID) => {
  console.log("deleteData", deleteID);
  props.newDeleteData(deleteID);
};

const filteredData = props.item.filter(ele => {return new Date(ele.date).getMonth() == yearSelected;});

let expenseTag = <p style={{color:"white"}}>No expenses found!</p>

console.log("filteredData",filteredData);
filteredData.map((element) => console.log("filteredData", element.id));

if (filteredData.length > 0) {
  expenseTag = filteredData.map((element) => (
    <ExpenseItem
      key={element.id}
      id={element.id}
      date={new Date(element.date)}
      title={element.title}
      type={element.type}
      status={element.status}
      description={element.description}
      updateDataProp={updateDataHandler}
      deleteElement={deleteHandler}
    />
  ));
}

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          deafultSelected={yearSelected}
          filterProp={sendSelectedFilter}
        />
        {expenseTag}
      </div>
    </div>
  );
}

export default Expenses;
