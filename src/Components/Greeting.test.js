import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
	test("renders Hello world as a text", () => {
		render(<Greeting />);

		const helloWorld = screen.getByText("Hello World");
		expect(helloWorld).toBeInTheDocument();
	});
	test("renders Good to see you when the button was not clicked", () => {
		render(<Greeting />);
		const outhPutElement = screen.getByText("Good to see ", { exact: false });
		expect(outhPutElement).toBeInTheDocument();
	});
	test("render Change if the button was clicked", () => {
		//Arange
		render(<Greeting />);
		//Act
		const btnElement = screen.getByRole("button");
		userEvent.click(btnElement);

		//Assert

		const outputElement = screen.getByText("Changed");
		expect(outputElement).toBeInTheDocument();
	});
	test("Does not render 'good to see you' if the button was clicked", () => {
		render(<Greeting />);
		//Act
		const btnElement = screen.getByRole("button");
		userEvent.click(btnElement);

		//Assert

		const outputElement = screen.queryByText("good to see you", {
			exact: false,
		});
		expect(outputElement).toBeNull();
	});
});
