import React from "react";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <ul className="Synonyms">
        {props.data.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
