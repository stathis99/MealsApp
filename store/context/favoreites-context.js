import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: () => {},
    deleteFavorite: (ids) => {},
});



function FavoritesContextProvider({children}){

    const [FavoriteMealId, setFavoriteMealsIds ] = useState([]);

    function addFavorite(id) {
        setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealsIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: FavoriteMealId,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }


    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;