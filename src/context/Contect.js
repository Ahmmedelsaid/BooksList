import { createContext, useContext } from "react";
import { useState } from "react";
const appContext = createContext(null);

export const useApp = () => {
  const context = useContext(appContext);

  if (context === undefined) {
    throw new Error("err");
  }
  return context;
};

const AppProv = ({ children }) => {
  const [fav, setFav] = useState([]);

  const addTO = (book) => {
    const oldFav = [...fav];
    const newFAv = oldFav.concat(book);

    setFav(newFAv);
  };
  const remove = (id) => {
    const oldFav = [...fav];
    const newFAv = oldFav.filter((book) => book.id !== id);

    setFav(newFAv);
  };
  const [want, setWant] = useState([]);

  const WantTo = (book) => {
    const oldWant = [...want];
    const newWant = oldWant.concat(book);

    setWant(newWant);
  };

  const remWant = (id) => {
    const oldWant = [...want];
    const newWant = oldWant.filter((book) => book.id !== id);

    setWant(newWant);
  };

  const [current, setCurrent] = useState([]);

  const addCurrent = (book) => {
    const oldcurrent = [...current];
    const newcurrent = oldcurrent.concat(book);
    setCurrent(newcurrent);
  };
  const removecurrent = (id) => {
    const oldcurrent = [...current];
    const newcurrent = oldcurrent.filter((book) => book.id !== id);

    setCurrent(newcurrent);
  };

  return (
    <appContext.Provider
      value={{
        fav,
        addTO,
        remove,
        want,
        WantTo,
        remWant,
        current,
        addCurrent,
        removecurrent,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
export default AppProv;
