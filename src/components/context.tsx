import React, { createContext, useContext, useState } from "react";
interface contextProps {
    deleteModal: boolean;
    setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
}
interface childrenProp {
    children: React.ReactNode;
}
const globalContext = createContext({} as contextProps);

const AppProvider = ({ children }: childrenProp) => {
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    return <globalContext.Provider value={{
        deleteModal,
        setDeleteModal
    }}>
        {children}
    </globalContext.Provider>
}
const useGlobalContext = () => {
    return useContext(globalContext);
}
export {useGlobalContext, AppProvider}