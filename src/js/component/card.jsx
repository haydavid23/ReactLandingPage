import React from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<Link to="#" className="btn btn-primary">
						Go somewhere
					</Link>
				</div>
			</div>
		);
	}
}
