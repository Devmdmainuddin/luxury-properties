import { useContext, useEffect } from "react";
import { PropertiesComponents } from "../providers/ContextComponent";
import { getStoreData } from "../utility/localstorage";
 import SingleCartItem from '../components/SingleCartItem'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const CartItems = () => {
    const { Properties,items,setItems } =useContext(PropertiesComponents)
    
    console.log(items)


useEffect(()=>{
    const storedata = getStoreData();
    const storeitem = []
//   console.log(storedata)
  
        for (const id of storedata) {
            const item = Properties.find(p => p.id == id);
         console.log(item)
            if (item) {
                storeitem.push(item)   
            }
        }
        setItems(storeitem);
 
},[Properties])

const totalPrice = items.reduce((p, c) => p + c.price, 0)

    return (
        <div className="max-w-[1170px] mx-auto md:px-24 lg:px-8 flex flex-col  p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
           <Helmet>
             <title>Luxury Properties | cart </title>
             </Helmet>
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                {items.map(item=><SingleCartItem key={item.id} item={item}></SingleCartItem>)}
                {/* {
                  cartitems.map(item => <SingleCartItem item={item}></SingleCartItem>)  
                } */}
                {/* {
                   cartitems.map((propertie,idx)=><SingleCartItem key={idx} propertie={propertie}></SingleCartItem>) 
                } */}
                
            </ul>
            <div className="space-y-1 text-right">
                <p>Total amount:
                    <span className="font-semibold">{totalPrice} €</span>
                </p>
                <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-end space-x-4">
                <button type="button" className="px-6 py-2 border rounded-md border-violet-400">Back
                <Link to='/'><span className="sr-only sm:not-sr-only">to shop</span></Link>
                </button>
                <button type="button" className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                </button>
            </div>
        </div>
    );
};

export default CartItems;