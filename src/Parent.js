import React, { useState, useEffect, useRef } from "react";
import Child from "./Child";

function Parent() {
  //Set the current state to 0
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Mark");

  //Parent holds count function
  const handleAdd = () => {
    setCount(count + 1);
  };

   const handleAddChild = () => {
     setCount(count + 5);
   };



  return (
    <div>
      <button onClick={handleAdd}>Parent Button</button>

      <Child handleAddChild={handleAddChild} title="ref" />
      {count}

      {name}
      <Child onChange={(value) => setName(value)} />
    </div>
  );
}

export default Parent;
