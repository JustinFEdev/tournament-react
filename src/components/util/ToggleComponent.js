import React, { useState } from "react";

export default function ToggleComponent() {
  const [value, setValue] = useState(false);
  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={setValue}>Toggle</button>
      <button onClick={() => setValue(true)}>
        Press True
      </button>
      <button onClick={() => setValue(true)}>
        Press False
      </button>
    </div>
  );
}
