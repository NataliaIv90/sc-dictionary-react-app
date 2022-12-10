import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponce(responce) {
    setResults(responce.data[0]);
  }

  function search() {
    // Documentaion --- https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponce);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setKeyword(props.defaultKeyword);
    setLoaded(true);
    search();
  }

  function setTheKeyword(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container">
          <section>
            <h1>
              <h1>What word are you looking for?</h1>
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a word"
                onChange={setTheKeyword}
                defaultValue={props.defaultKeyword}
              />
            </form>
            <div className="hint">
              Suggested keywords: summer, forest, camping, fireplace...
            </div>
          </section>
          <Result data={results} />
        </div>
      </div>
    );
  } else {
    load();
  }
}
