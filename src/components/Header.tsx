import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="h-5 w-20 border border-black"></div>
            <nav className="">
                <Link href="/">Home</Link>
                <Link href="/">Façades</Link>
                <Link href="/">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;