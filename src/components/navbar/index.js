import './navbar.css'
import Logos from '../logos';
import Opcoes from '../opcoesheader';
import Icones from '../iconesheader';


const Navbar = () => {
    return(
        <header className='App-header'>
          <Logos/>
          <Opcoes/>
          <Icones/>
      </header>
    )
}

export default Navbar