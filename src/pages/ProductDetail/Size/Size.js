import React from 'react';

export default function Size(props) {
  console.log(props);
  return (
    <li>
      <span className="check-box">
        <input
          type="radio"
          id={`size-` + props.data}
          name="size"
          className="hidden"
        />
        <label htmlFor={`size-` + props.data}>{props.data}</label>
      </span>
    </li>
  );
}
