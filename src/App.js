import Header from './components/Header';
import styled from 'styled-components';
import Pesquisa from './pesquisa';

const AppContainter = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589);
`

function App() {
  return (
    <AppContainter>
        <Header/>
        <Pesquisa/>
    </AppContainter>
  );
}

export default App;
