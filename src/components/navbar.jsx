import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"w-full bg-[bisque] py-8 px-4 md:px-12 shadow-lg"}>
            <div className="w-full flex justify-between items-center">
                <NavLink
                    to={"/Cocktails"}
                    className={"font-bold md:text-2xl text-xl duration-500"}
                >
                    COCKTAILS.
                </NavLink>
                <div className="flex items-center">
                    <NavLink to={"/Cocktails/"} className={"px-2"}>
                        Home
                    </NavLink>
                    <NavLink to={"/Cocktails/about"} className={"px-2"}>
                        About
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
