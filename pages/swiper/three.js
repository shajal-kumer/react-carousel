import Image from "next/image";
import { useState } from "react";
import SwiperCore, { Controller, Navigation, Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);
export default function Three() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [controlledSwiper, setControlledSwiper] = useState(null);

	const slides = [];

	for (let i = 0; i < 5; i++) {
		slides.push(
			<SwiperSlide tag="li" key={`slide-${i}`}>
				<Image src={`https://picsum.photos/id/${i + 1}/500/300`} alt="Slide iamge" width="500" height="300" />
			</SwiperSlide>
		);
	}
	const thumbs = [];

	for (let i = 0; i < 5; i++) {
		thumbs.push(
			<SwiperSlide tag="li" key={`slide-${i}`}>
				<Image src={`https://picsum.photos/id/${i + 1}/500/300`} alt="Slide iamge" width="160" height="100" />
			</SwiperSlide>
		);
	}

	const slides2 = [];

	for (let i = 5; i < 10; i++) {
		slides2.push(
			<SwiperSlide tag="li" key={`slide-${i}`}>
				<Image src={`https://picsum.photos/id/${i + 1}/500/300`} alt="Slide iamge" width="160" height="100" />
			</SwiperSlide>
		);
	}
	return (
		<div>
			<h1>Swiper carousel 3</h1>
			<Swiper
				tag="section"
				wrapperTag="ul"
				id="main"
				navigation
				pagination
				spaceBetween={0}
				slidesPerView={1}
				onInit={(swiper) => console.log("swiper init")}
				onSlideChange={(swiper) => console.log("Slider indec changed t o: ", swiper.activeIndex)}
				onReachEnd={(swiper) => console.log("swiper end React")}
				thumbs={{ swiper: thumbsSwiper }}
				controller={{ control: controlledSwiper }}
			>
				{slides}
			</Swiper>

			<Swiper id="thumbs" spaceBetween={5} slidesPerView={3} onSwiper={setThumbsSwiper}>
				{thumbs}
			</Swiper>
			<Swiper id="controller" onSwiper={setControlledSwiper}>
				{slides2}
			</Swiper>
		</div>
	);
}
