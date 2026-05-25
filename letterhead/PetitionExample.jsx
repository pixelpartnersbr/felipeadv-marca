// Modelo de petição/ofício compartilhado entre as variações
// Texto realista mas genérico, para o usuário ver como fica preenchido.

function PetitionExample() {
  return (
    <>
      <p className="endereco-juiz">
        EXMO. SR. DR. JUIZ DE DIREITO DA <strong>___ª VARA CÍVEL</strong> DA COMARCA DE
        VILA VELHA — ESTADO DO ESPÍRITO SANTO
      </p>

      <div className="processo-tag">
        PROCESSO Nº 0000000-00.2026.8.08.0000
      </div>

      <h1 className="peticao-title">PETIÇÃO INICIAL</h1>

      <p className="indent">
        <strong>FULANO DE TAL</strong>, brasileiro, casado, portador da Cédula de Identidade
        RG nº 0.000.000 SSP/ES, inscrito no CPF/MF sob nº 000.000.000-00, residente e
        domiciliado nesta Comarca, vem, respeitosamente, à presença de Vossa Excelência,
        por intermédio de seu advogado <em>infra-assinado</em>, conforme procuração anexa,
        propor a presente
      </p>

      <p style={{ textAlign: "center", margin: "16px 0", fontWeight: 600, color: "var(--fbm-navy)", letterSpacing: "0.05em" }}>
        AÇÃO DE COBRANÇA C/C INDENIZAÇÃO POR DANOS MORAIS
      </p>

      <p className="indent">
        em face de <strong>EMPRESA RÉ LTDA.</strong>, pessoa jurídica de direito privado,
        inscrita no CNPJ sob nº 00.000.000/0001-00, com sede na cidade de Vitória/ES,
        pelos fatos e fundamentos jurídicos que passa a expor.
      </p>

      <p className="salutation" style={{ marginTop: 22 }}>
        <strong style={{ fontStyle: "normal", letterSpacing: "0.12em", fontSize: "11.5px" }}>I — DOS FATOS</strong>
      </p>

      <p className="indent">
        O Autor manteve relação contratual com a Ré entre os meses de janeiro e outubro do
        corrente exercício, oportunidade em que firmou instrumento particular de prestação
        de serviços cuja contraprestação foi devidamente adimplida em sua integralidade,
        conforme comprovantes que ora se acostam aos autos.
      </p>

      <p className="closing">
        Termos em que, pede deferimento.
      </p>

      <p style={{ textAlign: "right", fontStyle: "italic", color: "var(--fbm-ink-soft)" }}>
        Vila Velha/ES, ___ de ____________ de 2026.
      </p>

      <div className="signature-block">
        <div className="signature-line"></div>
        <div className="signature-name">FELIPE DE BORTOLI MUNHOZ</div>
        <div className="signature-oab">OAB/ES 27.026</div>
      </div>
    </>
  );
}

window.PetitionExample = PetitionExample;
