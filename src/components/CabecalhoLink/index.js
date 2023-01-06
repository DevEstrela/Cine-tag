import { Children } from 'react';
import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

function CabecalhoLink({url, Children}){
    return(
        <Link to={url}  className={styles.link}>
            {Children}
        </Link>
    )
}

export default CabecalhoLink;