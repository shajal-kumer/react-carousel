import Link from "next/link";

export default function Home() {
	return (
		<div className="container">
			<h1>React Carouser Practice</h1>
			<h3>
				<Link href="/slick">
					<a>Slick Carousel - Click me</a>
				</Link>
			</h3>
		</div>
	);
}
