import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	const [time, setTime] = useState(0);
	useEffect(() => {
		const Interval = setInterval(() => {
			setTime(time + 1);
		}, 1000);
		return () => clearInterval(Interval);
	});

	/* 	let unidades = 
	let decenas = 
	let centenas = 
	let miles = time/1000; */

	return (
		<div className="d-flex container vh-100">
			<div className="d-flex mx-auto row align-items-center">
				<div
					className="caja bg-light text-center mx-1 col "
					style={{ height: "3rem", width: "3rem" }}>
					<span class="align-middle">
						{Math.floor((time / 1000) % 10)}
					</span>
				</div>
				<div
					className="caja bg-light text-center mx-1 col"
					style={{ height: "3rem", width: "3rem" }}>
					{Math.floor((time / 100) % 10)}
				</div>
				<div
					className="caja bg-light text-center mx-1 col"
					style={{ height: "3rem", width: "3rem" }}>
					{Math.floor((time / 10) % 10)}
				</div>
				<div
					className="caja bg-light text-center mx-1 col"
					style={{ height: "3rem", width: "3rem" }}>
					{time % 10}
				</div>
			</div>
		</div>
	);
};

export default Home;
