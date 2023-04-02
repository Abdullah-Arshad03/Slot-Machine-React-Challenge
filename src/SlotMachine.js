import React from "react";

// this is component

const SlotMachine = (props) => {
  
// as we props passed as object like : 
// const props = {emoji1 : ,
//                 emoji2 : ,
//                  emoji3 : }

  // this is object destructuring :)
const {emoji1 , emoji2 , emoji3} = props 
  // let x = props.emoji1;
  // let y = props.emoji2;
  // let z = props.emoji3;

  if (emoji1 === emoji2 && emoji2 === emoji3) {
    return (
      <>
        <div className="slotInner">
          <h1 className="emojis">
            {emoji1} {emoji2} {emoji3}
          </h1>
          <h1 className="message">
            This <span className="Wmsg" >{emoji1}</span> is<span style={{ color: "green" }}> Matching</span>
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slotInner">
          <h1 className="emojis">
            {emoji1} {emoji2} {emoji3}
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
