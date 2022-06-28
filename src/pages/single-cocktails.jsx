import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    fetchSingleCocktails,
    removeSelection,
} from "../features/cocktails/cocktails-slice";
import Loading from "../components/loading";

const SingleCocktails = () => {
    const { cocktail, loading } = useSelector((state) => ({
        ...state.cocktails,
    }));
    const [modifyCocktails, setModifyCocktails] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSingleCocktails(id));
        return () => {
            removeSelection();
        };
    }, [dispatch, id]);
    useEffect(() => {
        if (cocktail.length > 0) {
            const {
                strDrink: name,
                strDrinkThumb: image,
                strAlcoholic: info,
                strCategory: category,
                strGlass: glass,
                strInstructions: instructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
            } = cocktail[0];
            const strIngredient = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
            ];
            const newCocktail = {
                name,
                image,
                info,
                category,
                glass,
                instructions,
                strIngredient,
            };
            setModifyCocktails(newCocktail);
        } else {
            setModifyCocktails(null);
        }
        // console.log(modifyCocktails);
    }, [cocktail]);
    if (!modifyCocktails) {
        return <div>No cocktail to display</div>;
    } else {
        const {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            strIngredient,
        } = modifyCocktails;
        return (
            <div>
                {loading ? (
                    <Loading />
                ) : (
                    <div>
                        <h1
                            className={
                                "text-center my-8 font-semibold text-2xl"
                            }
                        >
                            {name}
                        </h1>
                        <div className="flex px-6 md:px-12">
                            <div className="w-3/6 md:w-3/12 md:mx-12 mx-4">
                                <img
                                    className={"rounded-md object-cover"}
                                    src={image}
                                    alt={name}
                                />
                            </div>
                            <div className="w-3/6">
                                <h1 className={"my-1"}>
                                    <span className={"font-semibold"}>
                                        Name:{" "}
                                    </span>
                                    {name}
                                </h1>
                                <h1 className={"my-1"}>
                                    <span className={"font-semibold"}>
                                        Info:{" "}
                                    </span>
                                    {info}
                                </h1>
                                <h1 className={"my-1"}>
                                    <span className={"font-semibold"}>
                                        Category:{" "}
                                    </span>
                                    {category}
                                </h1>
                                <h1 className={"my-1"}>
                                    <span className={"font-semibold"}>
                                        Glass:{" "}
                                    </span>
                                    {glass}
                                </h1>
                                <h1 className={"my-1"}>
                                    <span className={"font-semibold"}>
                                        Instructions:{" "}
                                    </span>
                                    {instructions}
                                </h1>
                                <h1 className={"my-1 flex flex-wrap"}>
                                    <span className={"font-semibold mr-1"}>
                                        Ingredient:
                                    </span>
                                    <div className="flex flex-wrap">
                                        {strIngredient &&
                                            strIngredient.map((data, index) => {
                                                return (
                                                    <div key={index}>
                                                        {data ? (
                                                            <div key={index}>
                                                                {data}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};

export default SingleCocktails;

//we can use map
//  {cocktail.map((data, index) => {
//                             return (
//                                 <div key={data.idDrink}><img src={data.strDrinkThumb}/></div>
//                             );
//                         })}
