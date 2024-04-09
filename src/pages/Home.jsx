 import { useContext } from "react";
import HeroSlider from "../components/Home/HeroSlider";
 import SingleProperties from "../components/Home/SingleProperties";
 import { PropertiesComponents } from "../providers/ContextComponent";
//  import { Link } from "react-router-dom";

const Home = () => {

 const {Properties}= useContext(PropertiesComponents)

    return (
        <div className="max-w-[1170px] mx-auto md:px-24 lg:px-8">
            <div>
            
                <HeroSlider></HeroSlider>
            </div>
            <div className="mt-[100px]">
                <div className="title">
                <h2 className="mx-auto text-3xl">Property Types</h2>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-6">
                    <div className="flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">
                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/1_d1faaaf0-d457-4f60-bce6-34b5399060bb.png?v=1697441100" alt="single family House" />
                        <div>
                            <h3 className="text-2xl mt-3">single family House</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">

                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/3_1e2ae6fc-9773-43ba-b830-36f16b2d167f.png?v=1697441101" alt="townhouses"></img>
                        <div>
                            <h3 className="text-2xl mt-3">townhouses</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">

                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/2_eda892f4-5e99-4002-99c2-ef5e73aaca34.png?v=1697441100" alt="Apartment" />
                        <div>
                            <h3 className="text-2xl mt-3">apartments</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">
                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/6.png?v=1697441101" alt="student housing" />
                        <div>
                            <h3 className="text-2xl mt-3">student housing</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">
                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/5.png?v=1697441100" alt="senior living communities" />
                        <div>
                            <h3 className="text-2xl mt-3">senior living communities</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">
                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/4_64552ab2-d965-4f6c-9b21-25cd2c82a666.png?v=1697441100" alt="vacation rentals" />
                        <div>
                            <h3 className="text-2xl mt-3">vacation rentals</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-[100px]">
                <h2 className="mx-auto text-3xl">Our best offers</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                  Properties.map(propertie=><SingleProperties key={propertie.id} propertie={propertie}></SingleProperties>)  
                }


                
            </div>
            </div>

            

        </div>
    );
};

export default Home;