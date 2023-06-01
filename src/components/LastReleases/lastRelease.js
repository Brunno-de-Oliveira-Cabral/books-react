import styled from "styled-components";
import { releaseBook } from "./lastReleaseBooks";
import { Title } from "../Title/title";
import RecommendationCard from "../RecommendationCard/recommendationCard";
import bookImage from "../../imgs/livro2.png";

const LastReleaseContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function LastRelease() {
  return (
    <LastReleaseContainer>
      <Title color="#eb9b00" fontSize="30px">
        ÚLTIMOS LANÇAMENTOS
      </Title>
      <NewBooksContainer>
        {releaseBook.map((book) => (
          <img src={book.src} alt="Book" />
        ))}
      </NewBooksContainer>
      <RecommendationCard
        title="Talvez você se interesse por"
        subtitle="Angular 11"
        description="Construindo uma aplicação com a plataforma google"
        image={bookImage}
      />
    </LastReleaseContainer>
  );
}

export default LastRelease;
