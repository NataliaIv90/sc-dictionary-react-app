import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  function setTheKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponce(responce) {
    setResults(responce.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // Documentaion --- https://dictionaryapi.dev/

    axios.get(apiUrl).then(handleResponce);
  }

  return (
    <div className="Dictionary">
      <div className="container">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Enter a word"
            onChange={setTheKeyword}
          />
        </form>

        <Result data={results} />
      </div>
    </div>
  );
}
