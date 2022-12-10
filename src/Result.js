import React from "react";
import "./Result.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result(props) {
  console.log(props);
  if (props.data) {
    return (
      <div className="Result">
        <h2>{props.data.word}</h2>
        <div className="d-flex">
          <Phonetics data={props.data.phonetics[0].audio} />
          <p className="ps-3">{props.data.phonetic}</p>
        </div>
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
