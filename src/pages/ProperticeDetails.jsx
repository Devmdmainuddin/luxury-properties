import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PropertiesComponents } from "../providers/ContextComponent";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { saveStoreData, savewishlistData } from "../utility/localstorage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProperticeDetails = () => {
  const { id } = useParams();
  const { Properties } = useContext(PropertiesComponents)
  const Propertie = Properties.find(product => product.id === parseInt(id))
  let data = []
  data.push(Propertie)

  const handlAddToCart = () => {
    if (Propertie) {
      saveStoreData(parseInt(id))
    }

  }
  const handalAddToWishlist = () => {
    if (Propertie) {
      savewishlistData(parseInt(id))
    }
  }


  return (
    <div className="max-w-[1170px] mx-auto md:px-24 lg:px-8">
      <Helmet>
        <title>Luxury Properties | Propertic details </title>
      </Helmet>
      <div className="container pb-10">
        <p className="font-Josefin text-xs text-gray-500">Home - Products</p>
      </div>
      {
        data.map((item, idx) => <div key={idx} className="container flex flex-col md:flex-row justify-between gap-x-6 items-center">
          <div className="w-1/2 h-[450px]">
            <img
              className="w-full max-h-full object-contain"
              src={item.image}
              alt=""
            />
          </div>
          <div className="w-1/2 py-7 px-8">
            <h3 className="font-Josefin text-3xl text-gray-800 font-semibold mb-2">
              {item.title}
            </h3>
            <ul className="flex flex-col gap-y-1">
              <li>
                <span className="font-semibold mr-2">Category : </span>
                {item.category}
              </li>
              <li>
                <span className="font-semibold mr-2">Price : </span>
                {"$" + item.price}
              </li>
              <li>
                <span className="font-semibold mr-2">Brand : </span>
                {item.segment_name}
              </li>
              <li className="flex items-center gap-x-1">
                <span className="font-semibold mr-1">Area : {item.area}</span>
              </li>
              <li className="flex items-center gap-x-1">
                <span className="font-semibold mr-2">Quantity :</span>

                <span
                  className="cursor-pointer inline-block p-2 bg-[#0a2623] text-gray-300 border border-[#0a2623] hover:bg-transparent hover:text-[#0a2623] transition-all duration-300"

                >
                  <FaMinus />
                </span>
                <span className="inline-block px-2">Quantity</span>
                <span
                  className="cursor-pointer inline-block p-2 bg-[#0a2623] text-gray-300 border border-[#0a2623] hover:bg-transparent hover:text-[#0a2623] transition-all duration-300"

                >
                  <FaPlus />
                </span>
              </li>
              <li>
                <span className="font-semibold mr-2">location : {item.location}</span> Available
              </li>

              <li>
                <p className="font-semibold">Description : </p>
                <p className="p-2">{item.description}</p>
              </li>

              <li className="font-semibold mr-2  ">facilities :
                {
                  item.facilities.map((facilities, idx) => <li key={idx} className="ml-6"> {facilities}</li>)
                }


              </li>
              <li className="flex items-center gap-x-2">
                <button onClick={handlAddToCart} className="py-2 px-4 bg-[#0a2623] text-gray-300 border border-[#0a2623] hover:bg-transparent hover:text-[#0a2623] transition-all duration-300">
                  Add to Wish List
                </button>
                <button onClick={handalAddToWishlist} className="py-2 px-4 bg-[#0a2623] text-gray-300 border border-[#0a2623] hover:bg-transparent hover:text-[#0a2623] transition-all duration-300">
                  Add to Cart
                </button>
              </li>

              <li className="font-semibold">Add a Review : </li>
              <li className="grid grid-cols-2 gap-2">
                <input
                  className="py-3 px-4 bg-transparent border border-gray-400 "
                  type="text"
                  placeholder="Your name here"
                />
                <input
                  className="py-3 px-4 bg-transparent border border-gray-400 "
                  type="email"
                  placeholder="Your email here"
                />
                <input
                  className="py-3 px-4 bg-transparent border border-gray-400 col-span-2"
                  type="text"
                  placeholder="Your review here"
                />
                <input
                  className="py-3 px-4 bg-green-800 hover:bg-green-900 text-center col-span-2 text-gray-300 font-bold"
                  type="button"
                  value="Post"
                />
              </li>
            </ul>
          </div>
        </div>)
      }

<ToastContainer />

    </div>

  );
};

export default ProperticeDetails;