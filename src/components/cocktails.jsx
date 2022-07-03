import React from "react";
import { Link } from "react-router-dom";
const Cocktails = ({
    idDrink,
    strDrinkThumb,
    strDrink,
    strAlcoholic,
    strGlass,
}) => {
    return (
        <div
            className={
                "bg-[bisque] rounded-md shadow-md md:hover:shadow-2xl duration-500 transition-all delay-300 ease-out hover:transition-all hover:delay-300 hover:scale-110"
            }
        >
            <Link to={`/Cocktails/cocktails/${idDrink}`}>
                <img
                    className={"w-full object-cover rounded-t-md"}
                    src={strDrinkThumb}
                    alt={strDrink}
                />
                <div className="p-2">
                    <h1 className="font-semibold">{strDrink}</h1>
                    <h1>{strGlass}</h1>
                    <p className="bg-black table py-1 px-4 rounded-md text-white mt-1">
                        {strAlcoholic}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Cocktails;
