import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

const localStorageKey = "hola-tasks";

const LocalStorageContext = createContext({
    // getItem: () => {},
    // setItem: () => {},
    // removeItem: () => {}
});

const useLocalStorageContext = () => useContext(LocalStorageContext);

const LocalStorageProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const getItem = (key) => {
        return items.find(x => x.key === key) || null;
    };

    const setItem = useCallback((key, value) => {
        const data = JSON.parse(localStorage.getItem(localStorageKey) || "[]") || [];
        const existingItem = data.find(x => x.key === key);

        const mappedData = existingItem
        ? data.map((item) => item.key === key ? { key, ...value } : item)
        : [...data, { key, ...value }];
        
        localStorage.setItem(localStorageKey, JSON.stringify(mappedData));
        setItems(mappedData);
    }, []);

    const removeItem = useCallback((key) => {
        const data = JSON.parse(localStorage.getItem(localStorageKey) || "[]") || [];
        const filteredData = data.filter(x => x.key !== key);
        localStorage.setItem(localStorageKey, JSON.stringify(filteredData));
        setItems(filteredData);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(localStorageKey) || "[]") || [];
        setItems(data);
    }, [])

    return (
        <LocalStorageContext.Provider value={{ items, getItem, setItem, removeItem }}>
            {children}
        </LocalStorageContext.Provider>
    );
};

export { useLocalStorageContext }
export default LocalStorageProvider;