import { RepositoryItem } from "./RepositoryItem";

const repository = {
	name: "Unform2",
	description: "Forms in React",
	link: "https://github.com"
}

export function RepositoryList() {
	return (
		<section className="repository-list">
			<h1>Repository List</h1>

			<ul>
				<RepositoryItem repository={repository} />
			</ul>
		</section>
	)
}