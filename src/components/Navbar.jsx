import { useState } from "react";
import close from '../assets/cross.svg';
import menu from '../assets/menuHamburger.svg';
import logo from '../assets/logo.svg';
import { NavLinks } from "../constants";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="flex justify-between items-center py-5">
            <img src={logo} alt="image logo" className="w-10 h-10" />
            <ul className="justify-between items-center md:flex hidden">
                {
                    NavLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`cursor-pointer text-bold ${active === nav.title ? "text-neutral-700" : "text-neutral-900"} ${index === NavLinks.length - 1 ? "mr-0" : "mr-5"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            {nav.title}
                        </li>
                    ))
                }
            </ul>
            <div className="md:flex hidden">
            <button className="px-4 border-r-2 border-neutral-800 text-neutral-800">Sign up</button>
                <button className="bg-neutral-800 rounded-3xl py-2 px-4 ml-10 text-white">Connect Wallet</button>
            </div>
            <div className="md:hidden flex">
                <img src={toggle ? close : menu}
                    alt="menu"
                    className="w-10 h-10 object-contain"
                    onClick={() => setToggle(!toggle)}
                />
            </div>
            <div
                className={`${!toggle ? "hidden" : "flex"} z-10 top-0 fixed left-0 w-full h-screen bg-white flex-col items-center`}
            >
                <div className="flex justify-between items-center w-full px-5 py-5">
                    <img src={logo} alt="image logo" className="w-10 h-10" />
                    <img src={close} alt="close" className="w-10 h-10 object-contain" onClick={() => setToggle(false)} />
                </div>
                <ul className="flex flex-col items-start gap-2">
                    {NavLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-neutral-700" : "text-neutral-900"} ${index === NavLinks.length - 1 ? "mb-0" : "mb-4"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    <div className="md:hidden flex mt-6">
                    <button className="px-4 border-r-2 border-neutral-800 text-neutral-800">Sign up</button>
                    <button className="bg-neutral-800 rounded-3xl py-2 px-4 ml-10 text-white">Connect Wallet</button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
