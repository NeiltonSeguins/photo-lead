import React, { useEffect, useState } from "react";
import "../styles/Css/gallery.css";
import Button from "./Button";

const Gallery = () => {
  const apiKey = "563492ad6f9170000100000173af64a66faf4b31b2cc80228e87b170";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(" https://api.pexels.com/v1/search?query=cats", {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setData(data.photos);
      });
  }, []);

  return (
    <>
      <section className="gallery">
        <div className="gallery_section">
          {data.map((photo, index) => {
            console.log(photo);
            return (
              <div className="gallery_container" key={index}>
                <img
                  className="gallery_photo"
                  src={photo.src.original}
                  alt=""
                  loading="lazy"
                />
                {/* <div className="gallery_author">
                  <h3>{photo.photographer}</h3>
                </div> */}
              </div>
            );
          })}
        </div>
        <Button />
      </section>
    </>
  );
};

export default Gallery;
