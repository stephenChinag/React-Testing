import "./App.css";
import Async from "./Components/Async";
import Greeting from "./Components/Greeting";

function App() {
	return (
		<div className="App">
			<h1>Learn react</h1>
			<Greeting />
			<Async />
		</div>
	);
}

export default App;
