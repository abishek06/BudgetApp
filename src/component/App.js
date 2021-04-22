import React from "react";
import BudgetEntry from "./BudgetEntry";
import ExpenseEntry from "./ExpenseEntry";
import Budget from "./Budget";
import Expense from "./Expense";
import Balance from "./Balance";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseValue from "./ExpenseValue";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px", width: "90%" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30%" }}>
            <h4>Budget Application</h4>
            <div style={{ marginTop: "80px" }}>
              <BudgetEntry></BudgetEntry>
            </div>
            <div style={{ marginTop: "40px" }}>
              <ExpenseEntry></ExpenseEntry>
            </div>
          </div>
          <div style={{ width: "70%" }}>
            <div
              style={{
                marginTop: "80px",
                paddingLeft: "30%",
                display: "flex",
              }}
            >
              <div style={{ width: "25%", textAlign: "center" }}>
                <Budget></Budget>
                <div style={{ marginTop: "20px" }}>
                  <ExpenseTitle></ExpenseTitle>
                </div>
              </div>
              <div style={{ width: "25%", textAlign: "center" }}>
                <Expense></Expense>
                <div style={{ marginTop: "20px" }}>
                  <ExpenseValue></ExpenseValue>
                </div>
              </div>
              <div style={{ width: "20%", textAlign: "center" }}>
                <Balance></Balance>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
