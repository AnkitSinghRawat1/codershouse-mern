import React from "react";
import styles from "./StepName.module.css";

const StepName = ({ onNext }) => {
  return (
    <div>
      StepName
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default StepName;
