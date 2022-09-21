import React, { useState } from "react";
import Button from "../../../Shared/Button/Button";
import Card from "../../../Shared/Navigation/Card/Card";
import TextInput from "../../../Shared/TextInput/TextInput";
import styles from "./StepOtp.module.css";

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState();
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock-emoji">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div>
            <div className={styles.actionButtonWrap}>
              <Button text="Next" />
            </div>
            <p className={styles.buttonParagrapgh}>
              By entering OTP, you're agreeing to our terms of service and
              privacy policy. Thanks!
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
