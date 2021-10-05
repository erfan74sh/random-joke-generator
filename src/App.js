import { useState, useEffect } from "react";
import axios from "axios";
// componnents
import Jokes from "./components/jokes/Jokes";
import JokeGenerator from "./components/jokeGenerator/JokeGenerator";

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
		<div className="container">
			<Jokes singleJoke={singleJoke} isLoading={isLoading} />
			<JokeGenerator
				generateRandomJoke={generateRandomJoke}
				handleCategory={handleCategory}
			/>
		</div>
	);
}

export default App;
