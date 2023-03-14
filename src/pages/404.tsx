import React from 'react';
import Link from "next/link";

const NotFoundPage404 = () => {
    return (
        <div className="flex flex-col items-center text-dark">
            <h1 className="m-0 text-[200px] font-medium tracking-wide">404</h1>
            <p className="text-[25px]">Désolé, il n'y a rien à voir ici</p>
            <Link className="p-10 tracking-wide underline duration-200 hover:text-grey" href="/">Retourner à la page d'accueil</Link>
        </div>
    )
};

export default NotFoundPage404;