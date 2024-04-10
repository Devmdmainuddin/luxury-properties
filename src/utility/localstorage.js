import {  toast } from 'react-toastify';

const getStoreData = () =>{
    const storedData = localStorage.getItem('CartPropertice');
    if(storedData){
        return JSON.parse(storedData)
    }  
    return [];
}

const saveStoreData = id =>{
    const storedDatas = getStoreData();
    const exists = storedDatas.find(Id => Id === id);
    if (exists) {
      return  toast.error('Propertice alredey in  cart !')
    }
    storedDatas.push(id)
    localStorage.setItem('CartPropertice', JSON.stringify(storedDatas))
    toast.success('Propertice ar added cart ') 

}
const removeFromData = id => {
    const storedDatas = getStoreData();
    const exists = storedDatas.filter(Pid => Pid != id);
     localStorage.setItem('CartPropertice', JSON.stringify(exists))
     toast.success('Propertice ar remove from  database')
}

// .................................................
const getwishlistData = () =>{
    const readData = localStorage.getItem('WishlistPropertice');
    if(readData){
        return JSON.parse(readData)
    }  
    return [];
}

const savewishlistData = id =>{
    const wishlistDatas = getwishlistData();
    const exists = wishlistDatas.find(Id => Id === id);
    if (exists) {
      return  toast.error('Propertice alredey in  Wishlist Propertice !')
    }
    wishlistDatas.push(id)
    localStorage.setItem('WishlistPropertice', JSON.stringify(wishlistDatas))
    toast.success('Propertice ar added Wishlist') 

}

const removeFromwishlist = id => {
    const wishlistDatas = getwishlistData();
    const existsitem = wishlistDatas.filter(Pid => Pid != id);
     localStorage.setItem('WishlistPropertice', JSON.stringify(existsitem))
     toast.success('Propertice ar remove from  Wishlist')
}



export  { getStoreData, saveStoreData, getwishlistData, savewishlistData ,removeFromData,removeFromwishlist}