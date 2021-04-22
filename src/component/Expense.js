import React from "react";

const Expense = () => {
  return (
    <div>
      <h4>Expense</h4>
      <div>
        <span>
          <i className="fa fa-credit-card fa-5x"></i>
        </span>
      </div>
      <div style={{ marginTop: "10px" }}>
        <i className="fa fa-credit-card fa-3x" aria-hidden="true">
          {0}
        </i>
      </div>
    </div>
  );
};

export default Expense;
