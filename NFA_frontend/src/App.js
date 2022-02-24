import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);

  const getAndUpdate = async () => {
    const results = await fetch("/api/posts");
    const resultsJSON = await results.json();

    resultsJSON.map((ele) => {
      return EXPENSES.push({
        id: ele._id,
        title: ele.projects,
        type: ele.type,
        date: ele.date,
        status: ele.status,
        description: ele.description,
      });
    });

    setExpenses([...EXPENSES]);
  };

  useEffect(() => {
    getAndUpdate();
    console.log("expenses", expenses);
  }, []);

  const _addProjectToTable = (newFormData) => {
    fetch("/api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFormData),
    })
      .then((res) => res.json())
      .then((res) => console.log("res", res));
  };

  const newExpenseFormData = async (newFormData) => {
    const addedResponse = await _addProjectToTable(newFormData);
    setExpenses((prevExpenses) => {
      return [newFormData, ...prevExpenses];
    });

    EXPENSES.length = 0;
    getAndUpdate();
  };

  const newUpdatedDataHandler = async (newUpdatedData) => {
    console.log("newUpdatedData", newUpdatedData);
    const patchData = {
      title: newUpdatedData.title,
      type: newUpdatedData.type,
      status: newUpdatedData.status,
      date: newUpdatedData.date,
      description: newUpdatedData.description,
    };

    const response = await fetch(
      `/api/posts/${newUpdatedData.id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patchData),
      }
    );

    const dataModified = await response.json();

    EXPENSES.length = 0;
    getAndUpdate();
  };

  const newDeleteDataHandler = async (newDeletedID) => {
    const responseDelete = await fetch(
      `/api/posts/${newDeletedID}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );

    const deletedData = await responseDelete.json();

    EXPENSES.length = 0;
    getAndUpdate();
  };

  return (
    <div>
      <NewExpense onNewExpenseData={newExpenseFormData}></NewExpense>
      {EXPENSES.length !== 0 && (
        <Expenses
          item={expenses}
          newUpdatedData={newUpdatedDataHandler}
          newDeleteData={newDeleteDataHandler}
        ></Expenses>
      )}
    </div>
  );
};

export default App;
