import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {getStoreData, saveStoreData, savewishlistData, removeFromData, removeFromwishlist } from "../utility/localstorage";
export const PropertiesComponents = createContext()
const ContextComponent = ({ children }) => {


  const [Properties, setproperties] = useState([])
  const [topPropertie,setTopPropertie]= useState([])
  const [rentPropertie,setRentPropertie]= useState([])
  const [salePropertie,setSalePropertie]= useState([])
  const [items, setItems] = useState([]);
  const [wishlist, setwishlist] = useState([])


  
  

  useEffect(() => {
    fetch('FakeData.json')
      .then((res) => res.json())
      .then((data) => {setproperties(data)
        const topProperties = [...data].sort((a, b) => b.price - a.price)
        setTopPropertie(topProperties)
        const Sale = [...data].filter(p=>p.status =='For Sale')
        setSalePropertie(Sale)
        const rent = [...data].filter(p=>p.status =='For Rent')
        setRentPropertie(rent)
        
     
       



      })
      
  }, [])

 
// ...........................................................
  const handlAddToCart = id => {
    
    const Propertie = Properties.find(product => product.id === parseInt(id))
    if (Propertie) {
      setItems((previousCart) => [...previousCart, parseInt(id)])
    }
    saveStoreData(parseInt(id))
  }

// ...........................................................

  const removeFromCart = (itemId) => {
    const remaining = items.filter(item => item.id != itemId);
    setItems(remaining)
    removeFromData(itemId)
  };
  const handalAddToWishlist = id => {
    const Propertie = Properties.find(product => product.id === parseInt(id))
    if (Propertie) {
      savewishlistData(parseInt(id))
      Propertie && setwishlist((previousList) => [...previousList, parseInt(id)])

    }
  }


  // ...........................................................
  const removeishlist = (itemId) => {
    const remainingitem = wishlist.filter(item => item.id != itemId);
    setwishlist(remainingitem)
    removeFromwishlist(itemId)
  };

// ...........................................................

  return (
    <PropertiesComponents.Provider value={{ Properties,topPropertie,rentPropertie,salePropertie, handlAddToCart, handalAddToWishlist, removeFromCart, removeishlist, items, setItems,wishlist, setwishlist }}>
      {children}
    </PropertiesComponents.Provider>
  );
};

ContextComponent.propTypes = {
  children: PropTypes.node,
}

export default ContextComponent;