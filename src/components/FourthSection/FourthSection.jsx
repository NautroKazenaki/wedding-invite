import React from 'react'
import FSStyles from './FourthSection.module.css'
import CTimeline from './TimeLine'


const FourthSection = () => {
  return (
    <div className={FSStyles.mainContainer}>
        <div className={FSStyles.labelContainer}>
            <h3>История нашей любви</h3>
        </div>
        <CTimeline />
    </div>
  )
}

export default FourthSection