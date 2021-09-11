import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var emojiDictionary = {
    "😀": "Happy",
    "🤣": "Rolling on the floor laughing",
    "😍": "smiling with heart eyes",
    "😋": "savouring food",
    "🥱": "yawning",
    "😪": "Sleepy",
    "😳": "shocked",
    "😠": "angry",
    "😌": "relieved",
    "😭": "loudly crying😌"
  };

  var [meaning, setMeaning] = useState("");

  function emojiMeaning(event) {
    var emojiInput = event.target.value;
    var emojiMeans = emojiDictionary[emojiInput];
    if (emojiMeans === undefined) {
      emojiMeans = "We don't know this emoji meaning";
    }
    setMeaning(emojiMeans);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  var emojiWeKnow = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <h1>Emoji Meaning</h1>
      <h2>Enter the emoji here ⏬</h2>
      <textarea onChange={emojiMeaning}></textarea>
      <div class="bold">{meaning}</div>
      <h3>Emojis We Know</h3>
      {emojiWeKnow.map((emoji, index) => (
        <span
          key={index}
          style={{ fontSize: "2rem", cursor: "pointer" }}
          onClick={() => emojiClickHandler(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
