export function RepositoryItem(props) {
	return (
		<li>
			<strong>{props.repository.name}</strong>
			<p>{props.repository.description ?? "Description not available"}</p>

			<a href={props.repository.html_url}>Access repository</a>
			
		</li>
	);
}