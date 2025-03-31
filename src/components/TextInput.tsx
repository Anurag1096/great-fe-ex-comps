import React, { useState, useRef } from "react";
import "./textInput.css";
//

type Props = {
  name: string;
  label: string;
  placeholder: string;
  hintText: string;
  password: boolean;
  email: boolean;
  rightImageSrc: string;
  leftImageSrc: string;
};

function TextInput(props: Props) {
  const myRef = useRef(null);
  //This is a state varable.
  const [error, setError] = useState<boolean>(false);
  // The following are not state variable.
  const newType = props.password ? "password" : props.email ? "email" : "text";
  const rightImage = props.rightImageSrc ? props.rightImageSrc : null;
  const leftImage = props.leftImageSrc ? props.leftImageSrc : null;
  //function expression's

  const focusClick = () => {
    myRef.current.focus();
  };

  return (
    <div className="input-container">
      <label onClick={focusClick}>
      {props.label ?? "Give Label"}

      </label>
      {/* Left side icon image */}
      {leftImage && (
        <img
          className="left-image"
          src={props.leftImageSrc}
          width={16}
          height={16}
          alt="Left_side_image"
        />
      )}
      <input
        ref={myRef}
        type={newType}
        name={props.name}
        placeholder={props.placeholder ? props.placeholder : ""}
      />
      {/* Right side icon image */}
          {rightImage && (
        <img
          className="right-image"
          src={rightImage}
          width={16}
          height={16}
          alt="Right_side_image"
        />
      )}
      

      {error && <span className="error-message">{props.hintText}</span>}

    </div>
  );
}

export default TextInput;
