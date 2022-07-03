import React from 'react'

function ColoredButton({ iconTag, buttonTitle, colorHex, fgHex }) {
  return (
    <button style={{ backgroundColor: "#eeeeee" }} className="colored-btn">
        <span className={iconTag}><ion-icon name={iconTag}></ion-icon></span>
        <h4 style={{ color: fgHex }}>{buttonTitle}</h4>
    </button>
  )
}

export default ColoredButton;