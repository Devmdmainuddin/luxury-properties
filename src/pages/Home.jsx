import { useContext } from "react";
import HeroSlider from "../components/Home/HeroSlider";
import SingleProperties from "../components/Home/SingleProperties";
import { PropertiesComponents } from "../providers/ContextComponent";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'animate.css';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
//  import { Link } from "react-router-dom";

const Home = () => {

    const { Properties } = useContext(PropertiesComponents)
 

    return (
        <div className="max-w-[1170px] mx-auto md:px-24 lg:px-8">
            <Helmet>
                <title>Luxury Properties | Home </title>
            </Helmet>
            <div>

                <HeroSlider></HeroSlider>
            </div>
            <div className="mt-[100px]">
                <div className="title animate__animated animate__fadeInLeft">
                    <h2 className="mx-auto text-3xl">Property Types</h2>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className=" animate__animated animate__fadeInLeft flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">
                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/1_d1faaaf0-d457-4f60-bce6-34b5399060bb.png?v=1697441100" alt="single family House" />
                        <div>
                            <h3 className="text-2xl mt-3">single family House</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>
                    <div className="animate__animated animate__fadeInDown flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">

                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/3_1e2ae6fc-9773-43ba-b830-36f16b2d167f.png?v=1697441101" alt="townhouses"></img>
                        <div>
                            <h3 className="text-2xl mt-3">townhouses</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>
                    <div className="animate__animated animate__fadeInRight flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">

                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/2_eda892f4-5e99-4002-99c2-ef5e73aaca34.png?v=1697441100" alt="Apartment" />
                        <div>
                            <h3 className="text-2xl mt-3">apartments</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>
                    <div className="animate__animated animate__fadeInLeft flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">
                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/6.png?v=1697441101" alt="student housing" />
                        <div>
                            <h3 className="text-2xl mt-3">student housing</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>
                    <div className="animate__animated animate__fadeInUp flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">
                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/5.png?v=1697441100" alt="senior living communities" />
                        <div>
                            <h3 className="text-2xl mt-3">senior living communities</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>
                    <div className="animate__animated animate__fadeInRight flex justify-center items-center flex-col bg-[#e5eff6] rounded-md py-12">
                        <img src="//nou-finderland.myshopify.com/cdn/shop/files/4_64552ab2-d965-4f6c-9b21-25cd2c82a666.png?v=1697441100" alt="vacation rentals" />
                        <div>
                            <h3 className="text-2xl mt-3">vacation rentals</h3>
                            <p>12 Properties</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-[100px]">
                <h2 className="mx-auto text-3xl animate__animated animate__fadeInLeft">Our best offers</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        Properties.map(propertie => <SingleProperties key={propertie.id} propertie={propertie}></SingleProperties>)
                    }



                </div>
            </div>
            <div>
                <section className="my-[100px] text-gray-800 ">
                    <div className="container flex flex-col items-center mx-auto mb-6  md:px-12">
                        <h1 className="p-4 text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                    </div>
                    <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            loop={true}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="flex flex-col  mx-4 my-6 shadow-lg">
                                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                            </svg>luxury properties is a very professional, punctual and reliable agent. Excellent experience ! She can communicate very well in English and will do everything she can to ensure that her client gets the best deal possible. Thank you very much for your patience and kindness
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
                                        <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                                        <p className="text-sm uppercase">Aliquam illum</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col  mx-4 my-6 shadow-lg">
                                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                            </svg>Sreyrath Lim was amazing in helping to find me my flat. Very quick service and super professional! Definitely would recommend
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                                        <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
                                        <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                                        <p className="text-sm uppercase">Aliquam illum</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col  mx-4 my-6 shadow-lg">
                                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                            </svg>Great support and help from the agents..
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                                        <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
                                        <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                                        <p className="text-sm uppercase">Aliquam illum</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col  mx-4 my-6 shadow-lg">
                                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                            </svg>I would like to express my appreciation to Ms. Sreyrath for her invaluable assistance in locating the most appropriate accommodations for our needs. Her exceptional responsiveness and willingness to address all of our inquiries have been greatly appreciated.
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
                                        <p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
                                        <p className="text-sm uppercase">Aliquam illum</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </section>
            </div>
            <div className="my-[100px]">
                
            </div>
        </div>
    );
};

export default Home;