// import styled from "styled-components";
import styled from "styled-components";
import Input from "../Input/input";
import { books } from "./testeBrunno";
import { useState } from "react";
import img from "../../imgs/BannerBooks.png"

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  // background-image: url(${img});
  // background-repeat: no-repeat;
  // background-size: 1920px 440px;
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

/**
 * Search Component
 * @returns {HTML} HTML
 */
function Search() {
  const [researchedBooks, setResearchedBooks] = useState([]);

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu Livro em nossa estante.</Subtitle>
      <Input
        placeholder="Pesquisar por Livro"
        onBlur={(event) => {
          const typedText = event.target.value;

          const searchResult = books.filter((livro) => {
            if (typedText !== "" && livro.nome.includes(typedText)) {
              return true;
            } else {
              return false;
            }
          });

          setResearchedBooks(searchResult);
        }}
      />
      {researchedBooks.map((livros) => (
        <Result>
          <img src={livros.src} alt="capa do livro" />
          <p>{livros.nome}</p>
        </Result>
      ))}
    </SearchContainer>
  );
}

export default Search;
