import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {/* If you want to display only firts definition */}
      <p>
        <strong>Definition: </strong>
        {props.data.definitions[0].definition}
      </p>

      <Example data={props.data.definitions[0].example} />
      <Synonyms data={props.data.definitions[0].synonyms} />

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
