import './Jogo.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Game = ({jogo, corDeFundo, aoDeletar, aoFavoritar}) => {
  const favoritar = () => {
    aoFavoritar(jogo.id);
  }

  const propsIcon = {
    size: 25,
    onClick: favoritar,
  }

  return (
    <div className='jogo'>
      <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(jogo.id)} />
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={jogo.imagen} alt={jogo.nome} />
      </div>
      <div className='rodape'>
        <h4>{jogo.nome}</h4>
        <h5>{jogo.desenvolvedora}</h5>
        <div className='favoritar'>
          {jogo.favorito ? <AiFillHeart {...propsIcon} color='#ff0000' /> : <AiOutlineHeart {...propsIcon} />}
        </div>
      </div>
    </div>
  )
}

export default Game;
