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
                "bg-[bisque] rounded-md shadow-md md:hover:shadow-2xl transition-all ease-out hover:transition-all hover:duration-300 md:hover:scale-[1.05] duration-300"
            }
        >
            <Link to={`/single-cocktail/${idDrink}`}>
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
