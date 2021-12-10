import React, { useEffect, useState } from "react";
import "../styles/Css/gallery.css";

const Gallery = () => {
  const [result, setResult] = useState([]);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(5);

  const slice = data.slice(0, load);

  function handleLoadMore(event) {
    event.preventDefault();
    setLoad(load + load);
    console.log(load);
  }

  useEffect(() => {
    const apiKey = "563492ad6f9170000100000173af64a66faf4b31b2cc80228e87b170";
    fetch(
      `https://api.pexels.com/v1/search/?page=1&per_page=${load}&query=dog`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setData(data.photos);
        console.log(data);
      })
      .then((result) => {
        setResult(result);
      });
  }, []);

  return (
    <>
      <section className="gallery">
        <div className="gallery_section">
          {slice.map((photo, index) => {
            return (
              <div className="gallery_container" key={index}>
                <img
                  loading="lazy"
                  className="gallery_photo"
                  src={photo.src.original}
                  alt={photo.avg_color}
                />
                <div className="gallery_author">
                  <h3>Foto: {photo.photographer}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={handleLoadMore} className="gallery_button">
          Ver mais fotos
        </button>
      </section>
    </>
  );
};

export default Gallery;
