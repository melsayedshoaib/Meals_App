import { createContext, useCallback, useState } from "react";

import axios from "axios";

export let MealsContext = createContext();
export default function MealsContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [random, setRandom] = useState([]);
  const [loading, setLoader] = useState(false);
  const mealsData = useCallback((mealName) => {
    setLoader(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
      .then((res) => {
        setLoader(false);
        setMeals(res.data.meals);
      });
  }, []);

  const mealsCategories = useCallback(() => {
    setLoader(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setLoader(false);
        setCategories(res.data.categories);
      });
  }, []);

  const mealsRandom = useCallback(() => {
    setLoader(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        setLoader(false);
        setRandom(res.data.meals);
      });
  }, []);

  return (
    <MealsContext.Provider
      value={{
        mealsData,
        meals,
        loading,
        mealsCategories,
        categories,
        mealsRandom,
        random,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
}
