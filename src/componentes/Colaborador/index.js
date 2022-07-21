import "./Colaborador.css";

const Colaborador = ({ imagem, nome, ramal, email, cargo, corDeFundo }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={"Foto do Colaborador: " + nome} />
      </div>
      <div className="rodape">
        <h4>{nome + " | " + ramal}</h4>
        <h5>{cargo}</h5>
        <a href={'mailto:'+email}><h6>{email}</h6></a>
      </div>
    </div>
  );
};

export default Colaborador;
