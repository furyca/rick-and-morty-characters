import { gql } from "@apollo/client";

export const GET_CHARS = gql`
  query GetChars ($page: Int!, $gender: String!, $species: String!, $name: String!) {
    characters(
      page: $page
      filter: { gender: $gender, species: $species, name: $name }
    ) {
      results {
        id
        name
        species
        image
        gender
        origin {
          name
        }
      }
      info {
        pages
        next
        prev
      }
    }
  }
`;