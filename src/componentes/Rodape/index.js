import "./Rodape.css";

const Rodape = (props) => {
  return (
    <footer className="footer">
      <section className="redes">
        <ul>
          {/* Item Rede */}
          <li>
            <a href="" title="Link rede social: Facebook" target="_blank">
              <img src="./imagens/fb.png" width={32} height={32} alt="" />
            </a>
          </li>
          {/* Item Rede */}
          <li>
            <a href="" title="Link rede social: Twiter" target="_blank">
              <img src="./imagens/ig.png" width={32} height={32} alt="" />
            </a>
          </li>
          {/* Item Rede */}
          <li>
            <a href="" title="Link rede social: Instagram" target="_blank">
              <img src="./imagens/tw.png" width={32} height={32} alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section className="organo">
            <a href="https://www.organo.com.br/" title="Link para o site da Organo" target="_blank">
                <img src="./imagens/logo.png" width={191} height={73} alt="" />
            </a>
      </section>
      <section className="dev">
        <p>Desenvolvido por Alura</p>
      </section>
    </footer>
  );
};

export default Rodape;
