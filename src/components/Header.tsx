import React from 'react';
import Link from "next/link";
import {NextRouter, useRouter} from "next/router";

const Header = () => {
    const route: NextRouter = useRouter();
    const isSelectedRoute = (path: string): boolean => {
        return route.pathname === path;
    }

    return (
        <div className="flex justify-between w-full h-20">
            <Link href="/">
                <img src="/images/Logo.png" alt="Logo" className="object-cover ml-5 h-full"/>
            </Link>
            <nav className="flex justify-around items-center w-[300px] text-[22px] text-dark">
                <Link
                    className={(isSelectedRoute("/") ? "border-b-2 border-b-dark" : "border-none")}
                    href="/">Home</Link>
                <Link href="#contact" scroll={false}>Contact</Link>
            </nav>
        </div>
    );
};


export default Header;