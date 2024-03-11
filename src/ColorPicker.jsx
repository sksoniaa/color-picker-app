import React, {useState} from "react";

export default function ColorPicker() {

  const [backroundColor, setBackgroundColor] = useState("#ff99aa")
  const [color, setColor] = useState("#ffff")


  function handleBackgroundColorChange(event) {
    setBackgroundColor(event.target.value)
  }
  function handleColorChange(event) {
    setColor(event.target.value)
  }
  return(
    <>
      <div className="color-picker-component">

        <h1>Color Picker</h1>


        <div className="color-display" style={{backgroundColor: backroundColor, color: color}}>
          <p>background color: {backroundColor}</p>
          <p>text color: {color}</p>
        </div>

        <label>Select a background color: </label>
        <input type="color" value={backroundColor} onChange={handleBackgroundColorChange} />
        <br />
        <label>Select a text color: </label>
        <input type="color" value={color} onChange={handleColorChange} />

      </div>
    </>
  )

}