import React from "react";

const Budget = () => {
  return (
    <div>
      <h4>Budget</h4>
      <div>
        <span>
          <i className="fa fa-money fa-5x"></i>
        </span>
      </div>
      <div style={{ marginTop: "10px" }}>
        <i className="fa fa-money fa-3x" aria-hidden="true">
          {0}
        </i>
      </div>
    </div>
  );
};

export default Budget;
