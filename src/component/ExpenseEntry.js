import React from "react";

class Expense extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid green",
          width: "400px",
        }}
      >
        <div className="ui segment">
          <form className="ui-form">
            <div className="field">
              <h3>Please Enter Your Expense</h3>
              <input type="text" style={{ width: "100%" }}></input>
              <h3>Please Enter Your Expense Amount</h3>
              <input type="text" style={{ width: "100%" }}></input>
              <div style={{ paddingTop: "10px" }}>
                <input type="button" value="Add Expense"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Expense;
