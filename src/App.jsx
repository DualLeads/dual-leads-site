import React from "react";

const whatsappHref =
  "https://wa.me/556181963957?text=Ola%2C%20vim%20pelo%20site%20da%20Dual%20Leads%20e%20quero%20entender%20como%20voces%20podem%20operar%20marketing%2C%20midia%20paga%20e%20comercial%20para%20o%20meu%20negocio.";

const navigation = [
  ["Servicos", "#servicos"],
  ["Metodo", "#metodo"],
  ["Setores", "#setores"],
  ["Empresa", "#empresa"],
  ["Contato", "#contato"],
];

const highlights = [
  ["Midia paga com gestao ativa", "Operacao de Meta Ads e Google Ads com leitura diaria e decisao comercial."],
  ["Marketing com implementacao", "Nao entregamos so plano. Entramos na execucao da maquina de aquisicao."],
  ["Comercial com processo", "Ajustamos o caminho entre lead, atendimento, follow-up e fechamento."],
];

const services = [
  {
    id: "01",
    title: "Midia paga e performance",
    text:
      "Planejamento, criacao da estrutura de campanhas, segmentacao, remarketing, testes e otimizacao para captar demanda com mais consistencia.",
  },
  {
    id: "02",
    title: "Implementacao de marketing",
    text:
      "Organizamos a base da operacao: oferta, pagina, criativos, copy, eventos, mensageria e acompanhamento do funil com foco real em conversao.",
  },
  {
    id: "03",
    title: "Implementacao comercial",
    text:
      "Desenhamos processos para atendimento, qualificacao, recuperacao de oportunidades e rotina comercial para o lead nao morrer na mao do time.",
  },
  {
    id: "04",
    title: "Tecnologia aplicada ao crescimento",
    text:
      "Conectamos formularios, CRMs, automacoes, rastreamento e dados para dar previsibilidade e velocidade para a operacao.",
  },
];

const sectors = [
  "Negocios locais e servicos especializados",
  "Infoprodutos, experts e operacoes de lancamento",
  "Clinicas, estetica e saude privada",
  "Imobiliario, decoracao, arquitetura e ticket medio maior",
  "Empresas que precisam alinhar marketing e comercial",
];

const methodSteps = [
  ["Diagnostico", "Entendemos meta, gargalo, oferta e maturidade comercial antes de colocar verba para rodar."],
  ["Arquitetura", "Estruturamos campanhas, mensagens, paginas e pontos de contato para a operacao nascer organizada."],
  ["Aceleracao", "Entramos em rotina de testes, leitura e melhoria continua com foco em lead qualificado e resposta rapida."],
  ["Escala com criterio", "Aumentamos volume quando a estrutura de marketing e comercial mostra capacidade de sustentar crescimento."],
];

const numbers = [
  ["Marketing, trafego e tecnologia", "Uma frase clara sobre o que fazemos e como entramos na operacao."],
  ["Brasil", "Atendimento com leitura de mercado local e ambicao de crescimento nacional."],
  ["Contato direto", "WhatsApp e email para iniciar conversas com agilidade."],
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
              <small>Marketing, midia paga e processos comerciais</small>
            </span>
          </a>

          <nav className="nav">
            {navigation.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a className="topbar-cta" href={whatsappHref} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Dual Leads</span>
              <h1>
                Operacao de crescimento para negocios que precisam vender com mais metodo.
              </h1>
              <p className="hero-lead">
                A Dual Leads opera marketing, trafego, tecnologia e processos comerciais para
                transformar demanda em oportunidades reais de venda. Nosso foco maior esta no
                manejo de midia paga e na estrutura comercial que sustenta o resultado.
              </p>
              <p className="hero-subtitle">
                Site institucional pensado para transmitir presenca, sofisticacao e clareza de
                entrega desde o primeiro scroll.
              </p>

              <div className="hero-actions">
                <a className="button primary" href={whatsappHref} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
                <a className="button secondary" href="#servicos">
                  Ver servicos
                </a>
              </div>

              <div className="hero-badges">
                <span>Midia paga</span>
                <span>Implementacao de marketing</span>
                <span>Processos comerciais</span>
                <span>Tecnologia</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-glow" />
              <article className="signal-card glass">
                <span className="card-label">Frase de posicionamento</span>
                <h2>Marketing que conversa com o caixa, nao so com o alcance.</h2>
                <p>
                  A operacao precisa ligar anuncio, conversa, atendimento e fechamento. E isso
                  exige mais do que impulsionar criativo bonito.
                </p>
              </article>

              <div className="insight-grid">
                {highlights.map(([title, text]) => (
                  <article className="signal-card" key={title}>
                    <span className="card-label">Dual Leads</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="statement-section">
          <div className="container statement-grid">
            {numbers.map(([title, text]) => (
              <article className="statement-card" key={title}>
                <span className="card-label">Base institucional</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="servicos">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow dark">Servicos</span>
              <h2>Uma empresa para estruturar aquisicao, conversao e crescimento.</h2>
              <p>
                Usamos como base a logica de entrega que ja orienta projetos comerciais mais
                sofisticados: clareza de oferta, implementacao de marketing, leitura de dados e
                fortalecimento do processo comercial.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-index">{service.id}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section deep-section" id="metodo">
          <div className="container method-layout">
            <div className="section-heading narrow light">
              <span className="eyebrow">Metodo</span>
              <h2>Midia paga fica mais forte quando o comercial para de operar no improviso.</h2>
              <p>
                O trabalho da Dual Leads e fazer a operacao respirar como sistema: da campanha ao
                atendimento, da tecnologia ao follow-up.
              </p>
              <a className="button primary" href={whatsappHref} target="_blank" rel="noreferrer">
                Falar com a Dual Leads
              </a>
            </div>

            <div className="method-grid">
              {methodSteps.map(([title, text], index) => (
                <article className="method-card" key={title}>
                  <span className="method-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="setores">
          <div className="container sectors-layout">
            <div className="section-heading narrow">
              <span className="eyebrow dark">Onde atuamos</span>
              <h2>Estrutura para diferentes areas do marketing, com foco pesado em midia paga.</h2>
              <p>
                A Dual Leads pode operar em diferentes contextos, mas cresce especialmente bem em
                negocios que precisam alinhar geracao de demanda, velocidade comercial e controle
                da operacao.
              </p>
            </div>

            <div className="sector-list">
              {sectors.map((item) => (
                <article className="sector-item" key={item}>
                  <span className="sector-dot" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section company-section" id="empresa">
          <div className="container company-grid">
            <article className="company-card large">
              <span className="card-label">Empresa</span>
              <h2>Dual Leads e uma operadora de crescimento para negocios no Brasil.</h2>
              <p>
                A empresa foi posicionada para comunicar autoridade sem parecer engessada. O site
                reforca que a entrega vai alem de campanhas: envolve marketing, trafego, tecnologia
                e comercial trabalhando na mesma direcao.
              </p>
            </article>

            <article className="company-card">
              <span className="card-label">Contato</span>
              <h3>agenciadlead@gmail.com</h3>
              <p>Canal direto para propostas, novos projetos e alinhamentos institucionais.</p>
            </article>

            <article className="company-card">
              <span className="card-label">Base</span>
              <h3>Brasil</h3>
              <p>Operacao com leitura local, execucao digital e estrutura pronta para crescer.</p>
            </article>
          </div>
        </section>

        <section className="content-section cta-section" id="contato">
          <div className="container cta-grid">
            <div>
              <span className="eyebrow dark">Contato</span>
              <h2>Se a sua empresa precisa de mais do que anuncios soltos, a Dual Leads entra para operar.</h2>
              <p>
                O proximo passo pode comecar agora por WhatsApp ou email. A proposta do site e
                deixar claro que existe metodo, presenca e estrutura real por tras da entrega.
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
