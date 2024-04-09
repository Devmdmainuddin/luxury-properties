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

//<img src="https://i.ibb.co/vzjPVfF/t-1.png" alt="t-1"/>
//<img src="https://i.ibb.co/jzfpMd5/vr.jpg" alt="vr" />
//<img src="https://i.ibb.co/Jt0mdgf/vr-1.jpg" alt="vr-1"/>
//<img src="https://i.ibb.co/fqL3zb0/vr-4.jpg" alt="vr-4"/>
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/0BFv3pB/1.jpg" alt="1" border="0"></a>
  //<a href="https://ibb.co/xhtsNMs"><img src="https://i.ibb.co/p2BPS3P/rl.webp" alt="rl" border="0"></a>           
//<a href="https://ibb.co/DbMdm9K"><img src="https://i.ibb.co/kyDZz4c/11.jpg" alt="11" border="0"></a>
   //<a href="https://ibb.co/s3S4vb1"><img src="https://i.ibb.co/nk2ys61/22.jpg" alt="22" border="0"></a>
   //<a href="https://ibb.co/nfFrwJQ"><img src="https://i.ibb.co/ftsMXwr/33.jpg" alt="33" border="0"></a>
 
 
 
 >
      <SwiperSlide>
      <section className=" text-gray-100 h-[400px]">
	<div className="container mx-auto flex flex-col items-center bg-[url(https://i.ibb.co/p2BPS3P/rl.webp)] bg-cover  bg-no-repeat bg-center py-16 text-center md:py-32  ">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
			<span className="text-violet-400">laborum doloribus</span>delectus
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">Learn more</button>
		</div>
	</div>
</section>
      </SwiperSlide>
      <SwiperSlide>
      <section className=" text-gray-100 h-[400px]">
	<div className="container mx-auto flex flex-col items-center bg-[url(https://i.ibb.co/nk2ys61/22.jpg)] bg-cover bg-no-repeat bg-center py-16 text-center md:py-32  ">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
			<span className="text-violet-400">laborum doloribus</span>delectus
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">Learn more</button>
		</div>
	</div>
</section>
      </SwiperSlide>
		<SwiperSlide>
      <section className=" text-gray-100 h-[400px]">
	<div className="container mx-auto flex flex-col items-center bg-[url(https://i.ibb.co/kyDZz4c/11.jpg)] bg-cover bg-no-repeat bg-center py-16 text-center md:py-32  ">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
			<span className="text-violet-400">laborum doloribus</span>delectus
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">Learn more</button>
		</div>
	</div>
</section>
      </SwiperSlide>
      <SwiperSlide>
      <section className=" text-gray-100 h-[400px]">
	<div className="container mx-auto flex flex-col items-center bg-[url(https://i.ibb.co/ftsMXwr/33.jpg)] bg-cover bg-no-repeat bg-center py-16 text-center md:py-32  ">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
			<span className="text-violet-400">laborum doloribus</span>delectus
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">Learn more</button>
		</div>
	</div>
</section>
      </SwiperSlide>
     
    </Swiper>
        </div>
    );
};

export default HeroSlider;