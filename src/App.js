import { Topbar } from './componentes/Topbar';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Genero from './componentes/Genero';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [generos, setGeneros] = useState([
    {
      id: uuidv4(),
      nome: 'Ação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Aventura',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'MMORPG',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'RPG',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'Estratégia',
      cor: '#D86EBF',
    },
    {
      id: uuidv4(),
      nome: 'Gerenciamento',
      cor: '#FEBA05',
    },
    {
      id: uuidv4(),
      nome: 'Sandbox',
      cor: '#FF8A29',
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: true,
      nome: 'Baldurs Gate 3',
      desenvolvedora: 'Larian Studios',
      imagen: 'https://i.imgur.com/aH6flJD.jpeg',
      genero: generos[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Assassins Creed Origins',
      desenvolvedora: 'Ubsisoft',
      imagen: 'https://i.pinimg.com/originals/e3/0a/04/e30a047c2351fcd2033cbda7bdb2df3d.jpg',
      genero: generos[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Warframe',
      desenvolvedora: 'Digital Extremes',
      imagen: 'https://i.imgur.com/eIByubs.png',
      genero: generos[2].nome
    }
  ]

  const [jogos, setJogo] = useState(inicial);

  const deletarJogo = (id) => {
    setJogo(jogos.filter(jogo => jogo.id !== id))
  }

  const mudarCorGenero = (cor, id) => {
    setGeneros(generos.map(genero => {
      if (genero.id === id) {
        genero.cor = cor;
      }

      return genero;
    }));
  }

  const aoNovoJogoAdicionado = (jogo) => {
    setJogo([...jogos, { ...jogo, id: uuidv4() }])
  }

  const cadastrarGenero = (novoGenero) => {
    setGeneros([...generos, { ...novoGenero, id: uuidv4() }])
  }

  const resolverFavorito = (id) => {
    setJogo(jogos.map(jogo => {
      if (jogo.id === id) jogo.favorito = !jogo.favorito;
      return jogo;
    }))
  }

  return (
    <div className="App">
      <Topbar />
      <Formulario
        generos={generos.map(genero => genero.nome)}
        aoJogoCadastrado={jogo => aoNovoJogoAdicionado(jogo)}
        cadastrarGenero={cadastrarGenero}
      />
      {generos.map(genero => {
        return <Genero
          key={genero.id}
          genero={genero}
          jogos={jogos.filter(jogo => jogo.genero === genero.nome)}
          aoDeletar={deletarJogo}
          mudarCor={mudarCorGenero}
          aoFavoritar={resolverFavorito}
        />
      })}
      <Rodape />
    </div>
  );
}

export default App;
