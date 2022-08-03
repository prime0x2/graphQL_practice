import { useQuery, gql } from "@apollo/client";

const GET_CHARS = gql`
	query {
		characters {
			results {
				id
				name
				image
			}
		}
	}
`;

export const useCharacters = () => {
    const { data, loading, error } = useQuery(GET_CHARS);
    return { data, loading, error };
}