import React from "react";
// style
import "./JokeGenerator.scss";

function JokeGenerator({ generateRandomJoke, handleCategory }) {
	return (
		<div className="joke-generator">
			<button className="joke-generator__btn" onClick={generateRandomJoke}>
				generate random joke
			</button>
			<select
				className="joke-generator__options"
				id="category"
				name="category"
				onChange={handleCategory}
			>
				<option value="Any">Any</option>
				<option value="Programming">programming</option>
				<option value="Miscellaneous">Misc</option>
				<option value="Dark">Dark</option>
				<option value="Pun">Pun</option>
			</select>
		</div>
	);
}

export default JokeGenerator;
