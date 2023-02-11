export default function Sobre() {
  return (
    <div className="containerTeam">
      <div className="aboutSection">
        <h1>
          <img src="/images/quemsomos.png" alt="Quem somos" />
        </h1>
        <p>
          Bem vindos à Galeria Poubelle du Garage. Somos uma equipa de 3
          excelentes cavalheiros e acreditamos que a verdadeira arte se encontra
          por vezes nas caixas empelhadas na nossa garagem.
        </p>
      </div>
      <h2>
        <img src="/images/anossaequipa.png" alt="A nossa Equipa" />
      </h2>
      <div className="rowTeam">
        <div className="columnTeam">
          <div className="cardTeam">
            <div className="cardContainer">
              <img src="/images/sirfriggit.png" alt="sapo num fato militar" />
              <h2>Sir Friggit Frogitson</h2>
              <p className="cardTitle">CEO & Fundador </p>
              <p>
                Sir Friggit Frogitson. Ganhou duas Medalhas de Valor Militar e
                uma de Bons Serviços, criou a empresa quando encontrou uma caixa
                de li- Obras de Arte na garagem.
              </p>
              <p>friggit@poubelle.pt</p>
            </div>
          </div>
        </div>
        <div className="columnTeam">
          <div className="cardTeam">
            <div className="cardContainer">
              <img
                src="/images/sirpatomajor.png"
                alt="pato num fato militar com uma capa elegante"
              />
              <h2>Sir Horácio de Sá</h2>
              <p className="cardTitle">Director de Negócios Estrangeiros </p>
              <p>
                Sir Horácio de Sá. Ganhou três Medalhas de Mérito Militar,
                responsável pela exportação internacional de Arte. É visinho do
                Sir Bacon e também tem caixas de Obras de Arte na sua garagem.
              </p>
              <p>horacio.business@poubelle.pt</p>
            </div>
          </div>
        </div>
        <div className="columnTeam">
          <div className="cardTeam">
            <div className="cardContainer">
              <img src="/images/sirdog.png" alt="cão num fato militar" />
              <h2>Sir Bacon Grill</h2>
              <p className="cardTitle">Farejador de Arte </p>
              <p>
                Sir Bacon Grill. Ganhou 5 Medalahas de Comportamento Exemplar, é
                responsável pela avaliação de peças de Arte. Vive à frente de
                Sir Friggit, também ele tem, caixas de Obras de Arte na sua
                garagem.
              </p>
              <p>ilikebacon.96@poubelle.pt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
