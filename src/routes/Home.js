import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';
import UltimosLancamentos from '../components/UltimosLancamentos';

const AppContainter = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589);
`

function Home() {
  return (
    <AppContainter>
        <Pesquisa/>
        <UltimosLancamentos />
    </AppContainter>
  );
}

export default Home
