import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const API = "https://fakestoreapi.com/products";

const intialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Prarabdha Bhagat",
        image: "./hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Our Services",
        image: "./about1.svg",
      },
    });
  };

  // To get the Api Call

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const newData = data.splice(0, 6);
      dispatch({ type: "GET_SERVICES", payload: newData });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
