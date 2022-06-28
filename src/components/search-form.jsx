import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "../features/cocktails/cocktails-slice";

const SearchForm = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    return (
        <form
            className="my-4 flex justify-end px-4 md:px-12"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                className="p-1 ring ring-gray-400 focus:ring-0 rounded"
                placeholder={"Search..."}
                type={"text"}
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    dispatch(fetchSearchCocktails({ search }));
                }}
            />
        </form>
    );
};

export default SearchForm;
