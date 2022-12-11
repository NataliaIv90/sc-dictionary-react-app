import React from "react";

export default function Gallery(props) {
  if (props.data) {
    return (
      <section className="Gallery">
        <div className="row">
          {props.data.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid  rounded"
                    alt="gallery element"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
