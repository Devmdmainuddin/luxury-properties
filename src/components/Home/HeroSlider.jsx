import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation } from 'swiper/modules';

const HeroSlider = () => {
    return (
        <div className='max-w-[1170px] mx-auto'>
            <Swiper 
    //   spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Navigation]}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}


 
 >
      <SwiperSlide>
      <section className=" text-gray-100 h-[400px]">
	<div className="container mx-auto flex flex-col items-center bg-[url(https://i.ibb.co/Ws8TQt0/banner-4.jpg)] bg-cover  bg-no-repeat bg-center py-16 text-center md:py-32  ">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl text-[#0e0e0e]">Find Your Perfect  
			<span className="text-orange-500"> place</span>
		</h1>
		<p className="px-8 mt-4  text-lg">If you are looking for a place to buy or rent,</p>
		<p className="px-8  mb-3 text-lg">we know what to offer you!</p>

		<div className="flex flex-wrap justify-center pb-[50px]">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-orange-500 text-white">FOR RENT</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-orange-500">FOR SALE</button>
		</div>
	</div>
</section>
      </SwiperSlide>
      <SwiperSlide>
      <section className=" text-gray-100 h-[400px]">
	<div className="container mx-auto flex flex-col items-center bg-[url(https://i.ibb.co/3MsyzN0/home.jpg)] bg-cover bg-no-repeat bg-center py-16 text-center md:py-32  ">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl ">Modern homes with great 
			<span className="text-orange-500"> interior design</span>
		</h1>
		<p className="px-8 mt-4  text-lg">If you are looking for a place to buy or rent,</p>
		<p className="px-8  mb-3 text-lg">we know what to offer you!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-orange-500 text-white">FOR RENT</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-orange-500">FOR SALE</button>
		</div>
	</div>
</section>
      </SwiperSlide>
		<SwiperSlide>
      <section className=" text-gray-100 h-[400px]">
	<div className="container mx-auto flex flex-col items-center bg-[url(https://i.ibb.co/rF2ZZGW/banner-3.jpg)] bg-cover bg-no-repeat bg-center py-16 text-center md:py-32  ">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl text-gray-100">Quisquam necessita vel
			<span className="text-orange-500"> laborum doloribus</span>
		</h1>
		<p className="px-8 mt-4  text-lg">If you are looking for a place to buy or rent,</p>
		<p className="px-8  mb-3 text-lg">we know what to offer you!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-orange-500 text-white">FOR RENT</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-orange-500">FOR SALE</button>
		</div>
	</div>
</section>
      </SwiperSlide>
      <SwiperSlide>
      <section className=" text-gray-100 h-[400px]">
	<div className="container mx-auto flex flex-col items-center bg-[url(https://i.ibb.co/4dR207m/banner-2.jpg)] bg-cover bg-no-repeat bg-center py-16 text-center md:py-32  ">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl text-gray-100">Choose the home that fits you and your
			<span className="text-orange-500"> lifestyle.</span>
		</h1>
		<p className="px-8 mt-4  text-lg">If you are looking for a place to buy or rent,</p>
		<p className="px-8  mb-3 text-lg">we know what to offer you!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-orange-500 text-white">FOR RENT</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-orange-500">FOR SALE</button>
		</div>
	</div>
</section>
      </SwiperSlide>
     
    </Swiper>
        </div>
    );
};

export default HeroSlider;