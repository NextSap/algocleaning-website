import React from 'react';
import Link from "next/link";
import {NextRouter, useRouter} from "next/router";
import Data from "../../public/Data.json";

const Header = () => {
    const route: NextRouter = useRouter();
    const isSelectedRoute = (path: string): boolean => {
        return route.pathname === path;
    }

    return (
        <div className="flex justify-between w-full h-20">
            <Link className="flex items-center w-[40%] md:w-[300px]" href="/">
                <img src={Data.logo} alt="Logo" className="object-contain ml-2 h-[70%] md:h-full md:ml-5"/>
            </Link>
            <nav className="flex justify-around items-center text-[18px] text-dark w-[50%] md:w-[350px] md:text-[22px]">
                <Link
                    className={(isSelectedRoute("/") ? "border-b-2 border-b-dark" : "border-none")}
                    href="/">Home</Link>
                <Link href="#contact" scroll={false}>Contact</Link>
            </nav>
        </div>
    );
};


export default Header;