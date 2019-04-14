import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Jumbotron from "../component/jumbotron.jsx";
import Card from "../component/card.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5 container">
				<Jumbotron />
				<div className="row">
					<div className="col lg-3 mb-4">
						<Card />
					</div>
					<div className="col lg-3 mb-4">
						<Card />
					</div>
					<div className="col lg-3 mb-4">
						<Card />
					</div>
					<div className="col lg-3 mb-4">
						<Card />
					</div>
				</div>
			</div>
		);
	}
}
