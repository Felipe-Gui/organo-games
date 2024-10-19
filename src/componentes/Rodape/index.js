import './Rodape.css';

const Rodape = () => {
  return (
    <footer className='footer'>
      <section>
        <ul>
          <li>
            <a href='https://github.com/Felipe-Gui' rel='noreferrer' target='_blank'>
              <img src='/imagens/gh.png' alt='' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/felipe-gui-b206b8221/' rel='noreferrer' target='_blank'>
              <img src='/imagens/lk.png' alt='' />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <p>
          Deselvolvido por Felipe Gui.
        </p>
      </section>
    </footer>
  )
}

export default Rodape;
