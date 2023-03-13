import React from 'react';
import Link from "next/link";
import styles from '../styles/404.module.css';

const NotFoundPage404 = () => {
    return (
        <div className={styles.not_found_404}>
            <h1>404</h1>
            <p>Désolé, il n'y a rien à voir ici</p>
            <Link className={styles.back_home_link} href="/">Retourner à la page d'accueil</Link>
        </div>
    )
};

export default NotFoundPage404;