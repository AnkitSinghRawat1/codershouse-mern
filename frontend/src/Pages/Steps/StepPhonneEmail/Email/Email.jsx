import React, { useState } from 'react'
import Button from '../../../../Shared/Button/Button'
import Card from '../../../../Shared/Navigation/Card/Card'
import TextInput from '../../../../Shared/TextInput/TextInput'
import styles from "../StepPhoneEmail.module.css";

const Email = () => {
    const [email, setEmail] = useState("");

  return (
    <Card title="Enter your Email" icon="email-emoji">
     <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" />
        </div>
        <p className={styles.buttonParagrapgh}>
          By entering your number, you're agreeing to our terms of service and
          privacy policy. Thanks!
        </p>
      </div>
  </Card>
  )
}

export default Email