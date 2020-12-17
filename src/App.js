import React, { useState } from "react";
import "./styles.css";
import { emojiDictionary } from "./emojis";

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function clickHandler(event) {
    var userInput = event.target.value;

    meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Meaning not available in our database! :(";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    meaning = emojiDictionary[emoji];

    if (meaning === undefined) {
      meaning = "Meaning not available in our database! :(";
    }

    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emojis for Foodies</h1>

      <input placeholder="enter emoji" onChange={clickHandler}></input>

      <h2 style={{ color: "blueviolet" }}>{meaning}</h2>

      <h3>Emojis We Know:</h3>
      <div className="emojis-container">
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              className="emojis"
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
