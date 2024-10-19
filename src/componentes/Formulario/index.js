import Botao from '../Botao';
import { Campo } from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { useState } from 'react'

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [desenvolvedora, setDesenvolvedora] = useState('');
  const [imagen, setImagen] = useState('');
  const [genero, setGenero] = useState('');
  const [nomeGenero, setNomeGenero] = useState('');
  const [corGenero, setCorGenero] = useState('');

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoJogoCadastrado({
      nome,
      desenvolvedora,
      imagen,
      genero
    });
    setNome('');
    setDesenvolvedora('');
    setImagen('');
    setGenero('');
  }

  const cadastrarGenero = (e) => {
    e.preventDefault();
    props.cadastrarGenero({
      nome: nomeGenero,
      cor: corGenero,
    });
    setNomeGenero('');
    setCorGenero('');
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogo:</h2>
        <Campo valor={nome} aoAlterado={valor => setNome(valor)} label="Nome*" placeholder="Digite seu Nome" obrigatorio={true} />
        <Campo valor={desenvolvedora} aoAlterado={valor => setDesenvolvedora(valor)} label="Desenvolvedora" placeholder="Digite a Desenvolvedora" />
        <Campo valor={imagen} aoAlterado={valor => setImagen(valor)} label="Imagen" placeholder="Digite do endereço da Imagen" obrigatorio={false} />
        <ListaSuspensa valor={genero} aoAlterado={valor => setGenero(valor)} label="Genero do jogo*" itens={props.generos} obrigatorio={true} />
        <Botao>Criar Card</Botao>
      </form>

      <form onSubmit={cadastrarGenero}>
        <h2>Preencha os dados para criar um novo genero de jogo:</h2>
        <Campo valor={nomeGenero} aoAlterado={valor => setNomeGenero(valor)} label="Nome*" placeholder="Digite o nome genero" obrigatorio={true} />
        <Campo valor={corGenero} aoAlterado={valor => setCorGenero(valor)} label="Cor*" placeholder="Digite a cor do genero" obrigatorio={true} type='color' />
        <Botao>Criar um novo Genero</Botao>
      </form>
    </section>
  )
}

export default Formulario;
