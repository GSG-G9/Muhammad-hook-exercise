import React, {useState} from 'react';
import './index.css';

function Pallete() {
  const [color, setColor] = useState('#555');
  const colorsArray = ['#f52255', '#55AA55', '#A5A525', '#5500B5'];

  const handleColor = (e) => {
    setColor(e.target.value);
  }

  const colorElm = colorsArray.map((color, i) => {
    return (
      <button className='color-btn' key={i} onClick={handleColor} value={color}>Click Me</button>
    )
  })
  return (
    <div className="Pallete" style={{backgroundColor: color}}>
      {colorElm}
    </div>
  )
}

export default Pallete;
