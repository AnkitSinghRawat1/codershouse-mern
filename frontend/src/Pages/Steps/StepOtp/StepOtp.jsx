import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../../http";
import Button from "../../../Shared/Button/Button";
import Card from "../../../Shared/Navigation/Card/Card";
import TextInput from "../../../Shared/TextInput/TextInput";
import { setAuth } from "../../../store/authSlice";
import styles from "./StepOtp.module.css";

const StepOtp = () => {
  const [otp, setOtp] = useState();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  const dispatch = useDispatch()

  const submit = async () => {
    try {
      const { data } = await verifyOtp({ otp, phone: phone, hash: hash });
      dispatch(setAuth(data))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock-emoji">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div>
            <div className={styles.actionButtonWrap}>
              <Button onClick={submit} text="Next" />
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
