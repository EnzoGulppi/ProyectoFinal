import { Link } from "react-router-dom";
import "../styles/Header.scss";
const Header = () => {
  return (
    <header className="header-container__card">
      <nav className="header-container__nav">
        <Link className="header-container__link" to="/">
          Inicio
        </Link>
        <Link className="header-container__link" to="/explorer">
          Explorar
        </Link>
        <Link className="header-container__link" to="/animals">
          Animales
        </Link>
        <Link className="header-container__link" to="/About">
          Acerca de{" "}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
