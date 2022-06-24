import React from 'react'

function ColoredButton({ iconTag, buttonTitle, colorHex, fgHex }) {
  return (
    <button style={{ backgroundColor: colorHex }} className="colored-btn">
        <ion-icon className={iconTag} name={iconTag}></ion-icon>
        <h4 style={{ color: fgHex }}>{buttonTitle}</h4>
    </button>
  )
}

export default ColoredButton;