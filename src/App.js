import styled from 'styled-components';
import Header from './components/Header/header';
import Search from './components/Search/search';
import LastRelease from "./components/LastReleases/lastRelease";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastRelease />
    </AppContainer>
  );
}

export default App;
