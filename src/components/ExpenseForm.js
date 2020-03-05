import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

const date = new Date();
const now = moment();
console.log(date);
console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: undefined
    };
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description: description }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note: note }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: amount }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // Set error state equal to "Please provide description and amount."
      this.setState(() => ({
        error: "Please provide description and amount"
      }));
    } else {
      // Clear the error
      this.setState(() => ({
        error: ""
      }));
      // onSubmit
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div className="form__background">
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && (
            <p className="form__error">{this.state.error}</p>
          )}
          <input
            type="text"
            placeholder="Description"
            autoFocus
            className="text-input"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            className="date-input"
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <label>
            <input
              className="form-check-input"
              type="radio"
              name="react-tips"
              value="option1"
              checked={true}
            />
            Occurance
          </label>
          <textarea
            placeholder="Add an expense note (optional)"
            className="textarea"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <div className="form__actions">
            <button className="form__button">Save Expense</button>
          </div>
        </form>
      </div>
    );
  }
}
