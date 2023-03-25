import React from "react";

// this is component

const SlotMachine = (props) => {
    
    // this is object destructuring :)
  let x = props.emoji1;
  let y = props.emoji2;
  let z = props.emoji3;

  if (x === y && y === z) {
    return (
      <>
        <div className="slotInner">
          <h1>

            {x} {y} {z}
          </h1>
          <h1>
            This {props.emoji1} is
            <span style={{ color: "green" }}>Matching</span>
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slotInner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>
            This is <span style={{ color: "red" }}> Not Matching</span>
          </h1>
        </div>
      </>
    );
  }
};

export { SlotMachine };
