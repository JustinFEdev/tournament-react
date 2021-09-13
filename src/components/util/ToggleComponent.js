import React, { useState } from "react";

export default function ToggleComponent() {
  const [value, setValue] = useState(false);
  return (
    <>
      <div>{value.toString()}</div>
      <button onClick={value}>{value.toString()}</button>
      <button onClick={() => setValue(true)}>
        Press True
      </button>
      <button onClick={() => setValue(false)}>
        Press False
      </button>
    </>
  );
}
