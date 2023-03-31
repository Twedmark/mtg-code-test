import { useState } from "react";
import SearchFrom from "../../layout/form/SearchFrom";
import ColorWheel from "./../../Color-Wheel.webp";
import {
  Title,
  LoadingContainer,
  LoadingBackground,
  LoadingImg,
} from "./styles";

function Search() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <LoadingContainer>
          <LoadingBackground>
            <LoadingImg src={ColorWheel} alt="" />
          </LoadingBackground>
        </LoadingContainer>
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
