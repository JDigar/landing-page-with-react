import React from "react";

//include images into your bundle
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />

			<div>
				<Jumbotron />
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<Card />
						</div>
						<div className="col-lg-3">
							<Card />
						</div>
						<div className="col-lg-3">
							<Card />
						</div>
						<div className="col-lg-3">
							<Card />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
