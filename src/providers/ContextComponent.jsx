import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const PropertiesComponents =createContext()
const ContextComponent = ({children}) => {
    const [Properties,setproperties]= useState([])
    useEffect(()=>{
        fetch('FakeData.json')
            .then((res) => res.json())
            .then((data) =>setproperties(data));
    },[])

    return (
        <PropertiesComponents.Provider value={{Properties}}>
            {children}
        </PropertiesComponents.Provider>
    );
};
ContextComponent.propTypes = {
    children: PropTypes.node,
}
export default ContextComponent;