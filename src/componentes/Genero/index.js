import Game from '../Jogo';
import './Genero.css';
import hexToRgba from 'hex-to-rgba';

const Genero = ({ genero, jogos, aoDeletar, mudarCor, aoFavoritar }) => {
  return (
    (jogos.length > 0) ? <section className='genero' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(genero.cor, '0.6') }}>
      <input value={genero.cor} onChange={e => mudarCor(e.target.value, genero.id)} type='color' className='input-cor' />
      <h3 style={{ borderColor: genero.cor }}>{genero.nome}</h3>
      <div className='jogos'>
        {jogos.map(jogo => <Game key={jogo.id} jogo={jogo} corDeFundo={genero.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} />)}
      </div>
    </section> : ''
  )
}

export default Genero;
