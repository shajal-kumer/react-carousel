import Slider from "react-slick";

export default function Home() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,
		slidesToShow: 2,
	};

	const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className="container">
			<h2> Single Item</h2>
			<Slider {...settings}>
				{slides.map((index) => (
					<div key={index}>
						<h3>{index}</h3>
					</div>
				))}
			</Slider>
		</div>
	);
}
