import Logos from '../logos';
import Opcoes from '../opcoesheader';
import Icones from '../iconesheader';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const NavContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Navbar = () => {
    return(
        <NavContainer>
          <Link to="/">
            <Logos/>
          </Link>
          <Opcoes/>
          <Icones/>
      </NavContainer>
    )
}

export default Navbar