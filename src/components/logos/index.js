import './logos.css'
import logo from '../../imagens/logo.svg'

const Logos = () => {
    return(
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Alura</strong>Books</p>
          </div>
    )
}

export default Logos