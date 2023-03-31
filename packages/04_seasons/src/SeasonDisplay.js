import React from 'react'

import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
    className: 'season-display--summer'
  },
  winter: {
    text: 'Burr, it is cold!',
    iconName: 'snowflake',
    className: 'season-display--winter'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = props => {
  // 通过纬度（南北半球）和月份获取当前的季节
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName, className } = seasonConfig[season]

  return (
    <div className={`season-display ${className}`}>
      <i className={`icon massive icon-left ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon massive icon-right ${iconName}`} />
    </div>
  )
}

export default SeasonDisplay