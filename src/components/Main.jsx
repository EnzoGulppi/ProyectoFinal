import React from "react";
import "../styles/Main.scss";

const Main = (props) => {
  const { dogData } = props;

  return (
    <main className="main-container">
      <h1 className="main-container__h1">Imágenes de Perros</h1>
      <div className="main-container__tip">
        {dogData.length ? (
          dogData.map((dog, index) => (
            <div key={index} className="main-container__card">
              <img
                className="main-container__img"
                width="20%"
                src={dog.imageUrl}
                alt="Perro"
              />
              <p className="main-container__p">{dog.breed}</p>
            </div>
          ))
        ) : (
          <p>Sin información disponible</p>
        )}
      </div>
    </main>
  );
};

export default Main;
