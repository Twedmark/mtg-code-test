import { useState } from "react";
import SearchFrom from "./../../components/form/SearchFrom";

import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  margin: 0.5rem;
  justify-content: center;
  font-size: 2rem;
`;

function Search() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <p>laddar</p>
      ) : (
        <>
          <Title>Search</Title>
          <SearchFrom setLoading={setLoading} />
        </>
      )}
    </>
  );
}

export default Search;
