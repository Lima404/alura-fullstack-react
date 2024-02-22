import './opcoes.css'

const textOpcoes = [
    'CATEGORIAS',
    'MINHA ESTANTE',
    'FAVORITOS'
  ]
  
const Opcoes = () => {
    return(
        <ul className='opcoes'>
            { textOpcoes.map( (texto) => (
              <li className='opcao'>
                <p>{ texto }</p>
              </li>
            ) ) }
          </ul>
    )
}

export default Opcoes