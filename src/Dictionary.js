import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";
import Gallery from "./Gallery";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [galleryData, setGalleryData] = useState("");

  function handleDictionaryResponce(responce) {
    setResults(responce.data[0]);
  }

  function handlePexelsResponce(responce) {
    setGalleryData(responce.data.photos);
  }

  function search() {
    // Documentaion --- https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponce);
    const pexelsApiKey =
      "563492ad6f91700001000001f6e9ee7c096a458abc9b7c7b51a714cd";
    const header = `Authorization: Bearer ${pexelsApiKey}`;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    axios.get(pexelsApiUrl, { headers: header }).then(handlePexelsResponce);
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
            <h1>What word are you looking for?</h1>
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
          <Gallery data={galleryData} />

          <Result data={results} />
        </div>
      </div>
    );
  } else {
    load();
  }
}
