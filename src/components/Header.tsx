import React from 'react';
import Link from "next/link";
import {NextRouter, useRouter} from "next/router";

const logo = "https://nextsap.s-ul.eu/aH3D7rXq";

type HeaderProps = {
    contactId: string
}

const Header = (props: HeaderProps) => {
    const route: NextRouter = useRouter();
    const isSelectedRoute = (path: string): boolean => {
        return route.pathname === path;
    }

    return (
        <div className="flex justify-between w-full h-20">
            <img src={logo} alt="Logo" className="object-cover ml-5" />
            <nav className="flex justify-around items-center w-[300px] text-[22px]">
                <Link
                    className={"text-main " + (isSelectedRoute("/") ? "border-b-2 border-b-main" : "border-none")}
                    href="/">Home</Link>
                <Link className="text-main" href={"#" + props.contactId} scroll={false}>Contact</Link>
            </nav>
        </div>
    );
};


export default Header;