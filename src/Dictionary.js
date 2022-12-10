import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  function setTheKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponce(responce) {
    console.log(responce.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // Documentaion --- https://dictionaryapi.dev/

    axios.get(apiUrl).then(handleResponce);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={setTheKeyword}
        />
      </form>
    </div>
  );
}
