import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleProperties = ({propertie}) => {
    const {id,title,image,price,location,status,category,area}= propertie;
    return (
        <div className="animate__animated animate__fadeInRight border border-[#c6f1ef] rounded-lg">
                    <div className="rounded-lg w-full h-72  relative overflow-hidden flex justify-center items-center">
                    <span className="z-10 absolute top-3 left-3 py-2 px-3 text-white bg-orange-500 rounded-lg"> {status}</span>
                        <img
                            className="w-full h-full object-cover hover:scale-110 transition-all duration-500 "
                            src={image}
                            alt='alt'
                        />
                        

                    </div>
                    <div className="text py-3 px-4 ">
                        <h3 className="text-primery text-2xl font-semibold hover:text-hover transition-all duration-300">
                            {title}
                        </h3>
                        <p className="text-primery text-lg font-semibold my-2">{location}</p>
                        <p className="text-primery text-lg font-semibold text-[#669900]">$ {price}</p>
                        <div className="flex items-center justify-between mt-4 mb-2">
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
                        <Link to={`/propertices/${parseInt(id)}`}> <button className="w-full bg-[#6df0d6] py-2">show details</button></Link>
                       

                    </div>
        </div>
    );
};
SingleProperties.propTypes = {
    propertie:PropTypes.object,
}
export default SingleProperties;