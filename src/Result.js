import React from "react";
import "./Result.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result(props) {
  if (props.data) {
    return (
      <div className="Result">
        <section>
          <h2>{props.data.word}</h2>
          <div className="d-flex">
            <Phonetics data={props.data.phonetics[0].audio} />
            <p className="transcription">{props.data.phonetic}</p>
          </div>
        </section>
        <div>
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning data={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
