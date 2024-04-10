import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { saveStoreData, savewishlistData, removeFromData, removeFromwishlist } from "../utility/localstorage";
export const PropertiesComponents = createContext()
const ContextComponent = ({ children }) => {
  const [Properties, setproperties] = useState([])
  const [items, setItems] = useState([]);
  const [wishlist, setwishlist] = useState([])


  useEffect(() => {
    fetch('FakeData.json')
      .then((res) => res.json())
      .then((data) => setproperties(data));
  }, [])

  const handlAddToCart = id => {
    const Propertie = Properties.find(product => product.id === parseInt(id))
    if (Propertie) {
      saveStoreData(parseInt(id))
      setItems((previousCart) => [...previousCart, parseInt(id)])
    }

  }
  const removeFromCart = (itemId) => {
    const remaining = items.filter(item => item.id != itemId);
    setItems(remaining)
    removeFromData(itemId)
  };
  const handalAddToWishlist = id => {
    const Propertie = Properties.find(product => product.id === parseInt(id))
    if (Propertie) {
      savewishlistData(parseInt(id))
      setwishlist((previousList) => [...previousList, parseInt(id)])

    }
  }



  const removeishlist = (itemId) => {
    const remainingitem = wishlist.filter(item => item.id != itemId);
    setwishlist(remainingitem)
    removeFromwishlist(itemId)
  };


  return (
    <PropertiesComponents.Provider value={{ Properties, handlAddToCart, handalAddToWishlist, removeFromCart, removeishlist, items, setItems,wishlist, setwishlist }}>
      {children}
    </PropertiesComponents.Provider>
  );
};

ContextComponent.propTypes = {
  children: PropTypes.node,
}

export default ContextComponent;