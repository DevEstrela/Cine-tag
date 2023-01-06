import { Link } from "react-router-dom";
import logo from "./../../../public/imagens/logo.png";
import styles from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header className={styles.Cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo cinetag" ></img>
      </Link>
      <nav>
        
      </nav>
    </header>
  );
}

export default Cabecalho;
