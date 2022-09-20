import React, { useState } from "react";
import StepAvatar from "../Steps/StepAvatar/StepAvatar";
import StepName from "../Steps/StepName/StepName";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../Steps/StepPhonneEmail/StepPhoneEmail";
import StepUserName from "../Steps/StepUserName/StepUserName";
import styles from "./Register.module.css";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUserName,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step]

  const onNext = () => {
    setStep(step + 1)
  }

  return <div>
    <Step onNext={onNext} />
  </div>;
};

export default Register;
