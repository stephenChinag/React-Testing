import { useState } from "react";
import Output from "./OutPut";
const Greeting = () => {
	const [name, setName] = useState(false);

	const onNameChangeHandler = () => {
		setName(true);
	};
	return (
		<>
			<h1>Hello World</h1>
			{!name && (
				<Output>Good to see you when the button was not clicked </Output>
			)}
			{name && <Output>Changed</Output>}

			<button onClick={onNameChangeHandler}> Click Me</button>
		</>
	);
};

export default Greeting;
