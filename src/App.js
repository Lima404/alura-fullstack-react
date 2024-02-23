import Navbar from './components/navbar'
import styled from 'styled-components'
import Pesquisa from './components/pesquisa'
import UltimosLancamentos from './components/ultimoslancamentos'


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Navbar/>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
