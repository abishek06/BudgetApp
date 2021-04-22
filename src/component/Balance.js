import React from "react";

const Balance = () => {
  return (
    <div>
      <h4>Balance</h4>
      <div>
        <span>
          <i className="fa fa-calculator fa-5x" aria-hidden="true"></i>
        </span>
      </div>
      <div style={{ marginTop: "10px" }}>
        <i className="fa fa-calculator fa-3x" aria-hidden="true">
          {0}
        </i>
      </div>
    </div>
  );
};

export default Balance;
