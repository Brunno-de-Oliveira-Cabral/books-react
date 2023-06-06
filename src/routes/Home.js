import styled from 'styled-components';
import Search from '../components/Search/search';
import LastRelease from "../components/LastReleases/lastRelease";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  // background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

function Home() {
  return (
    <AppContainer>
      <Search />
      <LastRelease />
    </AppContainer>
  );
}

export default Home;
