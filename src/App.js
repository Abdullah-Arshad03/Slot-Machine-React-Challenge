import React from "react";
import { SlotMachine } from "./SlotMachine";
import { Heading } from "./Heading";
import './App.css';

// following are the emojis used in Slot Machine app
let santa = "🎅";
let glass = "🥂";
let glasses = "😎";
let cake = "🍰";
let smile = "😄";

const App = () => {
  return (
    <>
      <Heading />
      <div className="slotmachine">
        <SlotMachine emoji1={smile} emoji2={smile} emoji3={smile} />
        <SlotMachine emoji1={cake} emoji2={cake} emoji3={santa} />
        <SlotMachine emoji1={glass} emoji2={glass} emoji3={glass} />
        <SlotMachine emoji1={glasses} emoji2={smile} emoji3={cake} />
      </div>
    </>
  );
};
export { App };
