// import Swiper core and required modules
import SwiperCore, { EffectCards, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Pagination, EffectCards]);

export default function One() {
	return (
		<div className="container ">
			<div className="row">
				<div className="col my-app">
					<Swiper className="my-swiper-one" pagination={{ clickable: true }} effect={"cards"}>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}
