// Import Modules_
import React, { useRef } from "react";
import useSound from "use-sound";
import sound1 from "../media/Audio/RightAnswer.mp3";
import sound2 from "../media/Audio/WrongAnswer.mp3";

// Import Styles_
import "../App.css";

// Export Component_
const TypingBox = (props) => {
  let { givenKeys, usertext, setusertext } = props;
  const givenKeysArr = givenKeys.split(" ");
  const [playSuccess] = useSound(sound1);
  const [playError] = useSound(sound2);
  const currIndex = useRef(0);

  // Handle Input Event_
  const handleChange = (e) => {
    setusertext(e.target.value);
  };

  // Handle Key Press Event_
  const handleKeyPress = (e) => {
    playSound(e);
  };

  // Function for making sound effects_
  const playSound = (e) => {
    if (e.key !== " " && e.key === givenKeysArr[currIndex.current]) {
      playSuccess();
      currIndex.current++;
    } else if (e.key === "Backspace") {
      currIndex.current--;
    } else if (
      e.key !== " " &&
      e.key !== "Backspace" &&
      e.key !== givenKeysArr[currIndex.current]
    ) {
      playError();
      currIndex.current++;
    }
  };

  return (
    <div className="input-box">
      <input
        type="usertext"
        value={usertext}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default TypingBox;
