import React from "react";
import styles from "./StepUserName.module.css";

const StepUserName = ({ onNext }) => {
  return (
    <div>
      StepUserName
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default StepUserName;
