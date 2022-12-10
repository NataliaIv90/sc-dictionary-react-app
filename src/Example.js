import React from "react";

export default function Example(props) {
  if (props.data) {
    return (
      <p>
        <strong>Example:</strong>
        <em> {props.data}</em>
      </p>
    );
  } else {
    return null;
  }
}
