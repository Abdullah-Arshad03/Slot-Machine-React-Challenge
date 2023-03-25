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
          <h1 className="emojis">
            {x} {y} {z}
          </h1>
          <h1 className="message">
            This <span className="Wmsg" >{props.emoji1}</span> is<span style={{ color: "green" }}> Matching</span>
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slotInner">
          <h1 className="emojis">
            {x} {y} {z}
          </h1>
          <h1 className="message">
            This is <span style={{ color: "red" }}> Not Matching</span>
          </h1>
        </div>
      </>
    );
  }
};

export { SlotMachine };
