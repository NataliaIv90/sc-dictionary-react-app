import React from "react";

export default function Meaning(props) {
  console.log(props.data);
  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {/* If you want to display only firts definition */}
      <p>{props.data.definitions[0].definition}</p>
      <p>{props.data.definitions[0].example}</p>
      <hr />
      {/* If you want to display EVERY definition */}
      {/* {props.data.definitions.map(function (definition, index) {
        return (
          <div className="Meaning__definition" key={index}>
            <p>{definition.definition}</p>
            <p>
              <em>{definition.example}</em>
            </p>
            <hr />
          </div>
        );
      })} */}
    </div>
  );
}
