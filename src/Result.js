import React from "react";
import "./Result.css";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.data) {
    return (
      <div className="Result">
        <h2>{props.data.word}</h2>
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
