import React, { useState } from 'react'
import styles from './login.module.css'
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../Steps/StepPhonneEmail/StepPhoneEmail";

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
}

const Login = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step]

    const onNext = () => {
        setStep(step + 1)
    }

  return (
    <div>Login

        <Step onNext={onNext}/>
    </div>
  )
}

export default Login