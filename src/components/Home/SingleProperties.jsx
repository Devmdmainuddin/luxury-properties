import { Link } from "react-router-dom";


const SingleProperties = ({propertie}) => {
    const {id,title,price,location,status,category,area}= propertie;
    return (
        <div className="border border-[#c6f1ef]">
                    <div className="    w-full h-72  relative overflow-hidden flex justify-center items-center">
                        <img
                            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                            src='https://i.ibb.co/ftsMXwr/33.jpg'
                            alt='alt'
                        />

                    </div>
                    <div className="text py-3 px-4 ">
                        <h3 className="text-primery text-2xl font-semibold hover:text-hover transition-all duration-300">
                            {title}
                        </h3>
                        <p className="text-primery text-lg font-semibold">{location}</p>
                        <p className="text-primery text-lg font-semibold text-[#669900]">$ {price}</p>
                        <div className="flex items-center justify-between">
                            <div>
                                <h5 className="text-[#999999] text-[13px]">type</h5>
                                <h3>{status}</h3>
                            </div>
                            <div>
                                <h5 className="text-[#999999] text-[13px]">category</h5>
                                <h3>{category}</h3>
                            </div>
                            <div>
                                <h5 className="text-[#999999] text-[13px]">area</h5>
                                <h3 className="text-[16px] font-semibold">{area}</h3>
                            </div>
                        </div>
                        <Link to={`/propertices/${id}`}> <button className="w-full bg-[#6df0d6] py-2">show details</button></Link>
                       

                    </div>
                </div>
    );
};

export default SingleProperties;