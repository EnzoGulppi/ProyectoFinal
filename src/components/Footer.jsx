import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="l-footer">
        <h1>Perritos Random</h1>
        <p>
          Es una página creada para DogLovers, donde podrás encontrar imágenes
          aleatorias de tus perros favoritos, información de razas, eventos,
          entre otras cosas.
        </p>
      </div>

      <ul className="r-footer">
        <li>
          <h2>DEPORTES Y EVENTOS</h2>
          <ul className="box">
            <li>
              <a href="#">Premios</a>
            </li>
            <li>
              <a href="#">Políticas de eventos</a>
            </li>
            <li>
              <a href="#">Inscripciones</a>
            </li>
            <li>
              <a href="#">Fechas de eventos</a>
            </li>
          </ul>
        </li>
        <li className="columnas">
          <h2>DESTACADO</h2>
          <ul className="box">
            <li>
              <a href="#">Noticias</a>
            </li>
            <li>
              <a href="#">Razas</a>
            </li>
            <li>
              <a href="#">Comida</a>
            </li>
            <li>
              <a href="#">Tipos de cuidado</a>
            </li>
          </ul>
        </li>
        <li>
          <h2></h2>
          <ul className="box">
            <li>
              <a href="#">Buscar locales</a>
            </li>
            <li>
              <a href="#">Hazte miembro</a>
            </li>
            <li>
              <a href="#">Inscribe a tu perro</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="b-footer">
        <p>
          {" "}
          Coyright @2023 All rights reserved by: Alexandra Navarro and Enzo
          Gulppi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
