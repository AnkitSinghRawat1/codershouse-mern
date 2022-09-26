import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendOtp } from "../../../../http";
import Button from "../../../../components/Shared/Button/Button";
import Card from "../../../../components/Shared/Card/Card";
import TextInput from "../../../../components/Shared/TextInput/TextInput";
import { setOtp } from "../../../../store/authSlice";
import styles from "../StepPhoneEmail.module.css";

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch()

  const submit = async () => {
    const {data} = await sendOtp({phone: phoneNumber})
    console.log(data);
    dispatch(setOtp({phone: data.phone , hash: data.hash}))

    onNext();
  };
  return (
    <Card title="Enter your Phone number" icon="phone">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button onClick={submit} text="Next" />
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
