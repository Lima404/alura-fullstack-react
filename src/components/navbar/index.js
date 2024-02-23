import Logos from '../logos';
import Opcoes from '../opcoesheader';
import Icones from '../iconesheader';
import styled from 'styled-components'


const NavContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Navbar = () => {
    return(
        <NavContainer>
          <Logos/>
          <Opcoes/>
          <Icones/>
      </NavContainer>
    )
}

export default Navbar