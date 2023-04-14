import { prettyDOM } from "@testing-library/react";
import { useEffect, useState } from "react";
import styels from "./Async.module.css";
const Async = () => {
	const [posts, setPost] = useState([]);
	useEffect(() => {
		const dataFetch = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts",
			);

			const responsedata = await response.json();
			setPost(responsedata);
		};

		dataFetch();
	}, []);

	const content = posts.map((post) => (
		<li key={post.id} className={styels.li}>
			{post.title}
			{post.body}
		</li>
	));

	return (
		<div>
			<ul>{content}</ul>
		</div>
	);
};
export default Async;
