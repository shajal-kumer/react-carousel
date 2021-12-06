import Image from "next/image";
import { useRef } from "react";
import { EffectFlip, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
	{
		id: 1,
		username: "Shajal ",
		testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, culpa?",
	},
	{
		id: 2,
		username: "Kumar",
		testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, culpa?",
	},
	{
		id: 3,
		username: "Shawdesh ",
		testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, culpa?",
	},
	{
		id: 4,
		username: "Nitesh ",
		testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, culpa?",
	},
];

export default function Two() {
	const swiperRef = useRef(null);
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="my-slider">
						<style jsx>{`
							p {
								fontsize: "14px";
							}
						`}</style>
						<Swiper
							ref={swiperRef}
							modules={[Navigation, Pagination, EffectFlip]}
							spaceBetween={20}
							slidesPerView={3}
							navigation={{
								prevEl: ".prev",
								nextEl: ".next",
							}}
							pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true }}
						>
							{data.map((user) => (
								<SwiperSlide key={user.id}>
									<div className="slide-content">
										<div className="user-image">
											<Image src="https://picsum.photos/100" width="100" height="100" alt="" />
										</div>
										<h4>{user.username}</h4>
										<p className="t">{user.testimonial}</p>
									</div>
								</SwiperSlide>
							))}
							...
						</Swiper>
						<div className="swiper-pagination"></div>
						<div className="pagination">
							<div className="prev">
								<i className="ri-arrow-left-line"></i>
							</div>
							<div className="next">
								<i className="ri-arrow-right-line"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
