import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OpcoesHeader = styled.ul`
  display: flex;

`

const OpcaoHeader = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;


`

const textOpcoes = [
    'CATEGORIAS',
    'FAVORITOS',
    'ESTANTE'
  ]
  
const Opcoes = () => {
    return(
        <OpcoesHeader>
            { textOpcoes.map( (texto) => (
              <Link to={ `/${ texto.toLowerCase() }` } >
                <OpcaoHeader>
                  <p>{ texto }</p>
                </OpcaoHeader>
              </Link>
            ) ) }
          </OpcoesHeader>
    )
}

export default Opcoes