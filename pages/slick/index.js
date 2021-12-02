import "boxicons";
import Slider from "react-slick";
function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<box-icon name="right-arrow-alt"></box-icon>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			{" "}
			<box-icon name="left-arrow-alt"></box-icon>
		</div>
	);
}

export default function Slick() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,
		slidesToShow: 2,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		customPaging: (i) => <div>{i + 1}</div>,
	};

	const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className="container">
			<h2>React Slick Carousel</h2>
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
