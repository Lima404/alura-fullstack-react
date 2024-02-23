import styled from 'styled-components'

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
    'MINHA ESTANTE',
    'FAVORITOS'
  ]
  
const Opcoes = () => {
    return(
        <OpcoesHeader>
            { textOpcoes.map( (texto) => (
              <OpcaoHeader>
                <p>{ texto }</p>
              </OpcaoHeader>
            ) ) }
          </OpcoesHeader>
    )
}

export default Opcoes