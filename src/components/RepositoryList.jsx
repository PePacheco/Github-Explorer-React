import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

const repository = {
	name: "Unform2",
	description: "Forms in React",
	link: "https://github.com"
}

export function RepositoryList() {
	const [repositories, setRepositories] = useState([])

	useEffect(() => {
		fetch("https://api.github.com/users/PePacheco/repos")
			.then(response => response.json())
			.then(data => setRepositories(data))
	}, [])

	return (
		<section className="repository-list">
			<h1>Repository List</h1>

			<ul>
				{repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
			</ul>
		</section>
	)
}