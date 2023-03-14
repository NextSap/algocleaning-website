import React from 'react';
import Link from "next/link";
import {NextRouter, useRouter} from "next/router";

type HeaderProps = {
    contactId: string
}

const Header = (props: HeaderProps) => {
    const route: NextRouter = useRouter();
    const isSelectedRoute = (path: string): boolean => {
        return route.pathname === path;
    }

    return (
        <div className="flex justify-between ">
            <div className="h-[50px] w-[200px] border border-black"></div>
            <nav className="flex justify-around items-center w-[300px] text-[22px]">
                <Link
                    className={"text-main " + (isSelectedRoute("/") ? "border-b-2 border-b-main" : "border-none")}
                    href="/">Home</Link>
                <Link className="text-main" href={"#" + props.contactId}>Contact</Link>
            </nav>
        </div>
    );
};


export default Header;