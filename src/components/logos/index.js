//import './logos.css'
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    gap: 0px 10px;
`


const Logos = () => {
    return(
        <LogoContainer>
            <img src={logo} alt='logo'></img>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logos