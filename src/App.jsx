import React from "react";

const whatsappHref =
  "https://wa.me/556181963957?text=Ola%2C%20vim%20pelo%20site%20da%20Dual%20Leads%20e%20quero%20entender%20como%20voces%20podem%20operar%20marketing%2C%20midia%20paga%20e%20comercial%20para%20o%20meu%20negocio.";

const metrics = [
  ["Midia paga", "Google Ads e Meta Ads com gestao ativa e leitura comercial."],
  ["Marketing", "Implementacao de criativos, paginas, mensagens e ofertas."],
  ["Comercial", "Processos para atender, qualificar, recuperar e fechar."],
  ["Tecnologia", "CRM, automacoes, tracking e dados conectando a operacao."],
];

const method = [
  ["Aquisicao", "Atrair a audiencia certa e gerar demanda com criterio."],
  ["Engajamento", "Fazer a comunicacao sustentar interesse e resposta."],
  ["Comercial", "Transformar lead em conversa, proposta e fechamento."],
  ["Retencao", "Criar acompanhamento e recorrencia para manter o crescimento."],
];

const modules = [
  {
    title: "Trafego pago",
    tag: "Modulo 01",
    text:
      "Gestao de campanhas com foco em previsibilidade, controle de investimento e abastecimento do atendimento com oportunidades reais.",
    items: ["Meta Ads", "Google Ads", "Remarketing", "Otimizacao recorrente"],
  },
  {
    title: "Implementacao de marketing",
    tag: "Modulo 02",
    text:
      "Estruturamos paginas, ofertas, criativos, copys e pontos de conversao para o marketing nao operar pela metade.",
    items: ["Landing pages", "Criativos", "Copy", "Arquitetura de campanha"],
  },
  {
    title: "Implementacao comercial",
    tag: "Modulo 03",
    text:
      "Ajustamos o processo entre lead e venda para sua empresa parar de desperdiçar oportunidade por falta de rotina e processo.",
    items: ["Qualificacao", "Follow-up", "Recuperacao", "Roteiro comercial"],
  },
  {
    title: "Tecnologia e dados",
    tag: "Modulo 04",
    text:
      "Conectamos CRM, automacoes, dashboards e rastreamento para que a operacao ganhe velocidade e leitura de decisao.",
    items: ["CRM", "Dashboards", "Automacoes", "Tracking"],
  },
];

const sectors = [
  "Negocios locais com necessidade de demanda previsivel",
  "Empresas de servico com ticket medio mais alto",
  "Operacoes que precisam alinhar marketing e vendas",
  "Clinicas, estetica, imobiliario, decoracao e educacao",
  "Negocios que querem crescer sem depender de improviso",
];

const steps = [
  ["01", "Diagnostico e direcao", "Leitura de meta, gargalo, estrutura atual e maturidade da operacao."],
  ["02", "Montagem da maquina", "Configuracao do marketing, dos canais, da mensagem e dos processos comerciais."],
  ["03", "Operacao e melhoria", "Acompanhamento semanal com teste, ajuste e decisao orientada por dados."],
];

export default function App() {
  return (
    <div className="site-shell">
      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
        Falar no WhatsApp
      </a>

      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#inicio" aria-label="Dual Leads">
            <span className="brand-mark">DL</span>
            <span className="brand-copy">
              <strong>Dual Leads</strong>
              <small>Midia paga, marketing, comercial e tecnologia</small>
            </span>
          </a>

          <nav className="nav">
            <a href="#metodo">Metodo</a>
            <a href="#modulos">Servicos</a>
            <a href="#empresa">Empresa</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="topbar-cta" href={whatsappHref} target="_blank" rel="noreferrer">
            Chamar agora
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="eyebrow">Operacao para negocios no Brasil</span>
              <h1>Montamos marketing, midia paga e processo comercial conforme a necessidade do seu negocio.</h1>
              <p className="hero-lead">
                A Dual Leads opera marketing, trafego, tecnologia e comercial para empresas que
                precisam de crescimento com estrutura. O foco maior esta no manejo de midia paga e
                na construcao de processos que sustentam venda.
              </p>

              <div className="hero-actions">
                <a className="button primary" href={whatsappHref} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
                <a className="button secondary" href="#modulos">
                  Ver estrutura
                </a>
              </div>

              <div className="hero-proof">
                <div>
                  <strong>Empresa institucional</strong>
                  <span>Posicionamento premium com foco em conversao.</span>
                </div>
                <div>
                  <strong>Atendimento Brasil</strong>
                  <span>Operacao digital com contato direto e rapido.</span>
                </div>
              </div>
            </div>

            <div className="hero-stage">
              <article className="stage-card main">
                <span className="card-tag">Dual Leads</span>
                <h2>Marketing que conversa com o atendimento, com o processo e com o caixa.</h2>
                <p>
                  Nao e so sobre subir campanha. E sobre construir uma maquina comercial que saiba
                  captar, responder, acompanhar e vender.
                </p>
              </article>

              <div className="stage-grid">
                {metrics.map(([title, text]) => (
                  <article className="stage-card" key={title}>
                    <span className="card-tag">Frente de entrega</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ticker-band">
          <div className="ticker-track">
            <span>Midia paga</span>
            <span>Implementacao de marketing</span>
            <span>Implementacao comercial</span>
            <span>Tecnologia e CRM</span>
            <span>Google Ads e Meta Ads</span>
            <span>Processo de vendas</span>
          </div>
        </section>

        <section className="metrics-section" id="metodo">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow dark">Metodo</span>
              <h2>Existe um fluxo para escalar com mais consistencia. O problema e quando cada parte opera sozinha.</h2>
              <p>
                A Dual Leads organiza aquisicao, relacionamento, comercial e retencao para o
                crescimento nao depender de sorte ou improviso.
              </p>
            </div>

            <div className="method-grid">
              {method.map(([title, text]) => (
                <article className="method-card" key={title}>
                  <span className="card-tag dark">Etapa</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="center-cta">
              <a className="button primary" href={whatsappHref} target="_blank" rel="noreferrer">
                Impulsionar minha operacao
              </a>
            </div>
          </div>
        </section>

        <section className="modules-section" id="modulos">
          <div className="container">
            <div className="section-head light">
              <span className="eyebrow">Servicos</span>
              <h2>Uma estrutura modular para marketing, comercial e tecnologia trabalharem na mesma direcao.</h2>
              <p>
                A inspiracao aqui e uma pagina com leitura comercial mais forte: blocos objetivos,
                servicos bem separados e clareza de como cada modulo ajuda a gerar resultado.
              </p>
            </div>

            <div className="modules-grid">
              {modules.map((module) => (
                <article className="module-card" key={module.title}>
                  <span className="card-tag">{module.tag}</span>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                  <ul>
                    {module.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="operational-section">
          <div className="container operational-layout">
            <div className="section-head">
              <span className="eyebrow dark">Como entra</span>
              <h2>Voce pode usar a Dual Leads como reforco do time ou como operacao externa completa.</h2>
              <p>
                O trabalho pode entrar para destravar uma frente especifica ou assumir a estrutura
                mais critica: trafego pago, criativos, paginas, CRM, comercial e acompanhamento.
              </p>
            </div>

            <div className="steps-list">
              {steps.map(([index, title, text]) => (
                <article className="step-card" key={index}>
                  <span className="step-index">{index}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sectors-section">
          <div className="container sectors-layout">
            <div className="section-head">
              <span className="eyebrow dark">Onde faz sentido</span>
              <h2>Especialmente forte para empresas que precisam de lead, rotina comercial e decisao baseada em dados.</h2>
            </div>

            <div className="sector-grid">
              {sectors.map((item) => (
                <article className="sector-card" key={item}>
                  <span className="sector-bullet" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="company-section" id="empresa">
          <div className="container company-grid">
            <article className="company-card hero-card">
              <span className="card-tag dark">Empresa</span>
              <h2>Dual Leads. Uma operadora de crescimento com linguagem comercial, leitura de performance e execucao pratica.</h2>
              <p>
                A pagina foi reposicionada para uma pegada mais proxima da referencia: headline
                forte, seções orientadas a venda e uma narrativa institucional mais agressiva sem
                perder o aspecto premium.
              </p>
            </article>

            <article className="company-card">
              <span className="card-tag dark">Contato</span>
              <h3>+55 61 8196-3957</h3>
              <p>WhatsApp principal para conversar com rapidez e iniciar o atendimento.</p>
            </article>

            <article className="company-card">
              <span className="card-tag dark">Email</span>
              <h3>agenciadlead@gmail.com</h3>
              <p>Canal institucional para propostas, alinhamentos e novos projetos.</p>
            </article>
          </div>
        </section>

        <section className="cta-section" id="contato">
          <div className="container cta-shell">
            <div>
              <span className="eyebrow dark">Proximo passo</span>
              <h2>Se fizer sentido estruturar marketing, trafego e comercial com mais criterio, a conversa pode comecar agora.</h2>
              <p>
                O objetivo desta pagina e deixar claro que a Dual Leads nao entrega um pacote
                raso. Ela entra para operar.
              </p>
            </div>

            <div className="cta-actions">
              <a className="button primary block" href={whatsappHref} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
              <a className="button tertiary block" href="mailto:agenciadlead@gmail.com">
                Enviar email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
