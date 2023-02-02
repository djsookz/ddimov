import React, { useRef, useState } from "react";

const Test2 = () => {
  const [item, setItem] = useState("Hello");

  const inputRef = useRef(null);

  const onClick = () => {
    setItem(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" />
      <div>{item}</div>
      <button onClick={onClick}>Hello</button>
    </div>
  );
};

export default Test2;
