import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./navitem";
import utilStyles from '../styles/utils.module.css';


const MENU_LIST = [
    {text: "Home", href: "/"},
    {text: "News", href: "/news"},
    {text: "Resource", href: "/tips"},
    {text: "About Us", href: "/about"},
];


const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className={`nav`}>
                <Link href={"/"}>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt=""
                    />
                </Link>
                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav_menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {
                        MENU_LIST.map((menu, idx) => (
                            <div 
                                onClick={() => {
                                    setActiveIdx(idx);
                                    setNavActive(false);
                                }}
                                key={menu.text}
                            >
                                <NavItem active={activeIdx === idx} {...menu} />
                            </div>
                        ))
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

