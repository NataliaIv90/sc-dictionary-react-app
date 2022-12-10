import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.data.partOfSpeech}</h3>
        {/* If you want to display only firts definition */}
        <p className="definition">{props.data.definitions[0].definition}</p>
        <p className="example">{props.data.definitions[0].example}</p>

        <Synonyms data={props.data.definitions[0].synonyms} />
      </section>
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
