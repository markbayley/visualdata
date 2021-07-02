import React from "react";

const Child =  ({handleAddChild, title, props})  => {

  return (
    <div>
      <button onClick={handleAddChild}>Child Button </button>
      {title}
      <button onClick={() => handleAddChild} >hi</button>

      <input onChange={event => props.onChange(event.target.value)}/>
    </div>
  );
}

export default Child;
