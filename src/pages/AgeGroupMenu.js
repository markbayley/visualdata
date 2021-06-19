import React from "react";
import GenderByAge from "../components/GenderByAge";

function BusinessUnitMenu() {
  return (
    <div className="reports">
      <h2 style={{ textAlign: "center" }}>Business Unit Analysis</h2>
      <GenderByAge />
    </div>
  );
}

export default BusinessUnitMenu;
