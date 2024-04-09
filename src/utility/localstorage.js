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
      return  toast.error('Propertice alredey in  wishlist !')
    }
    storedDatas.push(id)
    localStorage.setItem('CartPropertice', JSON.stringify(storedDatas))
    toast.success('Propertice ar added wishlist ') 

}

const getwishlistData = () =>{
    const readData = localStorage.getItem('WishlistPropertice');
    if(readData){
        return JSON.parse(readData)
    }  
    return [];
}

const savewishlistData = id =>{
    const readbooksDatas = getwishlistData();
    const exists = readbooksDatas.find(Id => Id === id);
    if (exists) {
      return  toast.error('Propertice alredey in  Wishlist Propertice !')
    }
    readbooksDatas.push(id)
    localStorage.setItem('WishlistPropertice', JSON.stringify(readbooksDatas))
    toast.success('Propertice ar added Wishlist') 

}

export  { getStoreData, saveStoreData, getwishlistData, savewishlistData }