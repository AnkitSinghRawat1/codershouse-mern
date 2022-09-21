import React, { useState } from "react";
import Button from "../../../../Shared/Button/Button";
import Card from "../../../../Shared/Navigation/Card/Card";
import TextInput from "../../../../Shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Card title="Enter your Phone number" icon="phone">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button onClick={onNext} text="Next" />
        </div>
        <p className={styles.buttonParagrapgh}>
          By entering your number, you're agreeing to our terms of service and
          privacy policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
