import React, { useState } from "react";
import "./App.css";
function App() {
  const [hori, sethori] = useState(10);
  const [veri, setvery] = useState(10);
  const [blur, setblur] = useState(10);
  const [spreat, setspreat] = useState(10);
  const [color, setcolor] = useState("#6e6e6e");
  console.log(hori, veri, blur, spreat, color);

  return (
    <div className="app">
      <div className="control">
        <div className="form-group ">
          <label htmlFor="">طول افقی</label>
          <input
            onChange={(e) => {
              sethori(e.target.value);
            }}
            type="range"
            min="-200" 
            max="200"
            className="form-range"
            value={hori}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="">طول عمودی</label>
          <input
            onChange={(e) => {
              setvery(e.target.value);
            }}
            type="range"
            min="-200"
            max="200"
            className="form-range"
            value={veri}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="">تاری </label>
          <input
            onChange={(e) => {
              setblur(e.target.value);
            }}
            min="0"
            max="200"
            type="range"
            className="form-range"
            value={blur}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="">گسترش رنگ </label>
          <input
            onChange={(e) => {
              setspreat(e.target.value);
            }}
            min="-100"
            max="50"
            type="range"
            className="form-range"
            value={spreat}
          />
        </div>
        <div className="form-group ">
          <label htmlFor=""> رنگ </label>
          <input
            onChange={(e) => {
              setcolor(e.target.value);
            }}
            type="color"
            className="form-control-color"
            value={color}
          />
        </div>
      </div>
      <div className="output"style={{boxShadow:`${hori}px ${veri}px ${blur}px ${spreat}px ${color}`}}>
        <div className="box" >
          <p>box-shadow:{hori}px {veri}px {blur}px {spreat}px {color};</p>
        </div>
      </div>
    </div>
  );
}

export default App;
