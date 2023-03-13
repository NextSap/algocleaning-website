import React from 'react';
import Link from "next/link";
import styles from "../styles/Header.module.css";
import {NextRouter, useRouter} from "next/router";
import {joinMultipleStrings} from "@/utils/StringUtils";

type HeaderProps = {
    contactId: string
}

const Header = (props: HeaderProps) => {
    const route: NextRouter = useRouter();
    const isSelectedRoute = (path: string): boolean => {
        return route.pathname === path;
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}></div>
            <nav className={styles.nav}>
                <Link
                    className={joinMultipleStrings(styles.link, isSelectedRoute("/") ? styles.selected_route : styles.not_selected_route)}
                    href="/">Home</Link>
                <Link className={styles.link} href={"#" + props.contactId}>Contact</Link>
            </nav>
        </div>
    );
};


export default Header;