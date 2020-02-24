import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpense from "../selectors/expenses";

export const ExpenseList = props => (
  <div className="list__background">
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile list-header__text">Expenses</div>
        <div className="show-for-desktop list-header__text">Expense</div>
        <div className="show-for-desktop list-header__text">Amount</div>
      </div>
      {/* <p>Expense Count: {props.expenses.length}</p>
      <p>Expense Average: (length divided by total then round up to floor)</p> */}
      {props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpense(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
