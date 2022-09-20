import React from 'react'
import styles from './StepPhoneEmail.module.css'

const StepPhoneEmail = ({onNext}) => {
  return (
    <div>
      <button onClick={onNext}>
        Next
      </button>
    </div>
  )
}

export default StepPhoneEmail