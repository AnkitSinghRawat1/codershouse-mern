import React from 'react'
import styles from './StepOtp.module.css'

const StepOtp = ({onNext}) => {
  return (
    <div>StepOtp
    
    <button onClick={onNext}>
        Next
      </button>
    </div>

  )
}

export default StepOtp