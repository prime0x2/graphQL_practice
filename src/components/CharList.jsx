import React from "react";
import { useCharacters } from "../hooks/useCharacters";

const CharList = () => {
	const { data, loading, error } = useCharacters();

	return (
		<div>
			<h1>Character List</h1>

			{loading && <p>Loading...</p>}

			{error && <p>Something went wrong...</p>}

			{data && data.characters ? (
				<div className="cards">
					{data.characters.results.map((char) => (
						<div key={char.id} className="card">
							<img src={char.image} alt={char.name} />
							<h2>{char.name}</h2>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

export default CharList;
