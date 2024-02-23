import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const IconesHeader = styled.ul`
  display: flex;
  align-items: center;
`

const IconeHeader = styled.li`
  margin-right: 40px;
  width: 25px;

`

const icones = [
    perfil,
    sacola
  ]

const Icones = () => {
    return(
        <IconesHeader>
            { icones.map( (icone) => (
              <IconeHeader><img src={icone}></img></IconeHeader>
            )) }
        </IconesHeader>
    )
}

export default Icones