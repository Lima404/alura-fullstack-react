import Navbar from './components/navbar'
import styled from 'styled-components'


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Navbar/>
    </AppContainer>
  );
}

export default App;
