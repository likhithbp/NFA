import React, {useState} from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

    const [isPresent,setIsPresent] = useState(false);

    const onSaveDataHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString(),
        };

        props.onNewExpenseData(newExpenseData);
    }

    const expenseButtonHandler = () => {
         setIsPresent(true);
    }

    const cancelButtonHandler = () => {
        setIsPresent(false);
    }

    return (
      <div className="new-expense">
        {!isPresent && (
          <button onClick={expenseButtonHandler}>New Psych</button>
        )}
        {isPresent && (
          <ExpenseForm
            onSaveData={onSaveDataHandler}
            onCancelButton={cancelButtonHandler}
          ></ExpenseForm>
        )}
      </div>
    );
}

export default NewExpense;