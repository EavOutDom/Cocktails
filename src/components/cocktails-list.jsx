import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../features/cocktails/cocktails-slice";
import Cocktails from "./cocktails";
import Loading from "./loading";
const CocktailsList = () => {
    const dispatch = useDispatch();
    let search = "a";
    const { cocktails, loading } = useSelector((state) => ({
        ...state.cocktails,
    }));
    const [modify, setModify] = useState([]);
    useEffect(() => {
        dispatch(fetchCocktails());
    }, [dispatch, search]);
    // console.log(cocktails);
    useEffect(() => {
        if (cocktails) {
            setModify(
                cocktails.map((cocktail) => {
                    return {
                        ...cocktail,
                    };
                })
            );
        } else {
            setModify([]);
        }
    }, [cocktails]);

    if (loading) {
        return <Loading />;
    }

    if (!cocktails) {
        return (
            <h1 className="text-center font-semibold text-xl">
                No Cocktails matched your search{" "}
            </h1>
        );
    }

    return (
        <div className={"grid grid-cols-auto gap-4 p-4 md:px-12"}>
            {modify.map((data, index) => {
                return (
                    <div key={data.idDrink}>
                        <Cocktails {...data} />
                    </div>
                );
            })}
        </div>
    );
};

export default CocktailsList;
