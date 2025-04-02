import React, { useState, useRef } from "react";
import "./textInput.css";
//

type Props = {
  id:string;
  name: string;
  label: string;
  placeholder: string;
  hintText: string;
  password: boolean;
  email: boolean;
  required:boolean;
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

  

  return (
    <div className="input-container">
      <label htmlFor="TextInput">
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
       id={props.id}
        ref={myRef}
        type={newType}
        pattern="[A-Za-z]+"
        name={props.name}
        placeholder={props.placeholder ? props.placeholder : ""}
        required={props.required}
        aria-required={props.required}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.id}-error` : undefined}
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
      
      {error && <p id={`${props.id}-error`} role="alert" style={{ color: "red" }}>{props.hintText}</p>}
     

    </div>
  );
}

export default TextInput;
