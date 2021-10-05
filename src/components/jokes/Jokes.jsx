import React from "react";
// style
import "./Jokes.scss";

const Jokes = ({ singleJoke, isLoading }) => {
	return (
		<div className="jokes">
			{isLoading && <h4>IS LOADING ... </h4>}
			<p>{singleJoke}</p>
		</div>
	);
};

export default Jokes;
