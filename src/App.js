import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [category, setCategory] = useState("Any");
	const [jokes, setJokes] = useState([]);
	useEffect(() => {
		axios
			.get(`https://v2.jokeapi.dev/joke/${category}?type=single&amount=10`)
			.then((res) => res.data)
			.then((data) => {
				setJokes(data.jokes);
				setIsLoading(false);
				return data.jokes;
			});
	}, [category]);
	const [singleJoke, setSingleJoke] = useState("");
	useEffect(() => {
		let a = jokes.filter((v, i) => i === 2);
		setSingleJoke(a.length > 0 ? a[0].joke : "is loading ... ");
	}, [jokes]);

	const generateRandomJoke = () => {
		let randIdx = Math.floor(Math.random() * 10);
		setSingleJoke(jokes.filter((v, i) => i === randIdx)[0].joke);
	};

	const handleCategory = (e) => {
		setIsLoading(true);
		setCategory(e.target.value);
	};
	return (
		<>
			{isLoading && <h4>IS LOADING ... </h4>}
			{/* <ul>
				{jokes.map((joke) => (
					<li key={joke.id}>{joke.joke}</li>
				))}
			</ul> */}
			<p>{singleJoke}</p>
			<button onClick={generateRandomJoke}>generate random joke</button>
			<select id="category" name="category" onChange={handleCategory}>
				<option value="Any">Any</option>
				<option value="Programming">programming</option>
				<option value="Miscellaneous">Misc</option>
				<option value="Dark">Dark</option>
				<option value="Pun">Pun</option>
			</select>
		</>
	);
}

export default App;
