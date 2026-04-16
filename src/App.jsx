import React, { useState, useEffect, useRef } from "react";
import logoTransparente from "./assets/logo_transparente_alta_resolucao.png";

// ============================================
// CONFIGURAÇÃO
// ============================================
const CONFIG = {
  whatsapp: "https://wa.me/556181963957?text=Olá!%20Vim%20pelo%20site%20da%20Dual%20Leads%20e%20quero%20entender%20como%20vocês%20podem%20ajudar%20minha%20empresa.",
  email: "contato@dualleads.com.br",
};

// ============================================
// DADOS
// ============================================
const stats = [
  { value: "+150", label: "Operações atendidas", icon: "🏢" },
  { value: "+R$12M", label: "Em vendas geradas", icon: "💰" },
  { value: "+5", label: "Anos de mercado", icon: "📅" },
  { value: "4.9", label: "Avaliação média", icon: "⭐" },
];

const problems = [
  { icon: "💸", text: "Desperdício de verba em anúncios" },
  { icon: "📱", text: "Leads perdidos no WhatsApp" },
  { icon: "🔄", text: "Follow-up fraco ou inexistente" },
  { icon: "📉", text: "Baixa taxa de conversão" },
  { icon: "📋", text: "Comercial desorganizado" },
  { icon: "❓", text: "Crescimento sem previsibilidade" },
];

const services = [
  {
    number: "01",
    title: "Geração de Demanda",
    description: "Campanhas de aquisição, mídia paga, landing pages e captação de leads com foco em oportunidade real.",
    items: ["Meta Ads", "Google Ads", "Landing Pages", "Captação de Leads"],
    icon: "🎯",
  },
  {
    number: "02",
    title: "Funil e Conversão",
    description: "Estruturamos a jornada entre o lead e a venda, reduzindo perdas em cada etapa.",
    items: ["Mapeamento de Funil", "Qualificação", "Follow-up", "Conversão"],
    icon: "📊",
  },
  {
    number: "03",
    title: "Implementação Comercial",
    description: "Organizamos processo, rotina, scripts e operação de vendas para o comercial funcionar.",
    items: ["Processo Comercial", "Scripts", "Rotina de Vendas", "Atendimento"],
    icon: "⚡",
  },
  {
    number: "04",
    title: "Dados, CRM e Automação",
    description: "CRM, dashboards e automações para dar visibilidade ao funil e apoiar decisões.",
    items: ["CRM", "Dashboards", "Tracking", "Automações"],
    icon: "🔧",
  },
];

const forWho = [
  "Negócios locais",
  "Clínicas e consultórios",
  "Empresas de serviços",
  "Consultorias",
  "Operações B2B",
  "Especialistas",
  "Ticket médio mais alto",
  "Já tem demanda, mas converte mal",
];

const methodology = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Analisamos onde o crescimento está travando: demanda, oferta, atendimento, follow-up, funil ou processo comercial.",
  },
  {
    step: "02",
    title: "Estruturação",
    description: "Desenhamos a operação para corrigir o problema: tráfego, páginas, CRM, funil, atendimento ou rotina comercial.",
  },
  {
    step: "03",
    title: "Implementação",
    description: "Executamos, acompanhamos e ajustamos para transformar estrutura em resultado mês após mês.",
  },
];

const differentials = [
  { icon: "🎯", text: "Mais clareza sobre o gargalo real" },
  { icon: "📈", text: "Mais aproveitamento dos leads" },
  { icon: "⚙️", text: "Mais organização no comercial" },
  { icon: "🚀", text: "Mais conversão, menos improviso" },
  { icon: "📊", text: "Mais previsibilidade de crescimento" },
];

const testimonials = [
  {
    text: "Saímos de uma operação com demanda inconsistente e comercial reativo para um processo com mais previsibilidade e melhor conversão.",
    author: "Cliente",
    role: "Empresa de Serviços",
    result: "+180% conversão",
  },
  {
    text: "A Dual Leads ajudou a identificar que o problema não era só tráfego, mas atendimento e follow-up. Isso mudou nossa operação.",
    author: "Cliente",
    role: "Clínica",
    result: "+R$120k/mês",
  },
  {
    text: "Depois de ajustar funil, processo comercial e geração de demanda, aproveitamos muito melhor as oportunidades que já chegavam.",
    author: "Cliente",
    role: "Consultoria B2B",
    result: "3x mais reuniões",
  },
];

const faqs = [
  {
    question: "Vocês ajudam só com tráfego pago?",
    answer: "Não. Também atuamos em funis, implementação comercial, atendimento, follow-up, processo de vendas e conversão.",
  },
  {
    question: "Quando faz sentido contratar a Dual Leads?",
    answer: "Quando a empresa precisa gerar mais demanda, vender melhor o que já chega ou estruturar marketing e comercial de forma integrada.",
  },
  {
    question: "Funciona para quem já recebe leads, mas converte mal?",
    answer: "Sim. Em muitos casos, o maior gargalo não está em gerar mais lead, mas em melhorar a operação que transforma lead em venda.",
  },
  {
    question: "Qual tipo de empresa vocês atendem melhor?",
    answer: "Negócios que dependem de lead, atendimento consultivo e fechamento com interação humana: serviços, clínicas, B2B, consultorias.",
  },
  {
    question: "Quanto tempo leva para ver resultado?",
    answer: "Depende do gargalo. Alguns ganhos aparecem em semanas, mas crescimento consistente exige estrutura, ajustes e execução contínua.",
  },
];

// ============================================
// HOOKS
// ============================================
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

// ============================================
// COMPONENTES
// ============================================

function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="scroll-progress">
      <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img className="logo__image" src={logoTransparente} alt="Logo Dual Leads" />
      <span className="logo__text">Dual Leads</span>
    </div>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <>
      <ScrollProgress />
      <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
        <div className="container header__inner">
          <a href="#inicio" className="header__logo">
            <Logo />
          </a>

          <nav className={`nav ${isMobileMenuOpen ? "nav--open" : ""}`}>
            <a href="#problema" onClick={() => setIsMobileMenuOpen(false)}>O Problema</a>
            <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
            <a href="#metodo" onClick={() => setIsMobileMenuOpen(false)}>Método</a>
            <a href="#resultados" onClick={() => setIsMobileMenuOpen(false)}>Resultados</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          </nav>

          <a href={CONFIG.whatsapp} target="_blank" rel="noreferrer" className="btn btn--primary btn--glow btn--header">
            <span className="btn__pulse"></span>
            Falar com especialista
          </a>

          <button
            className={`menu-toggle ${isMobileMenuOpen ? "menu-toggle--active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}

function FloatingElements() {
  return (
    <div className="floating-elements">
      <div className="floating-element floating-element--1"></div>
      <div className="floating-element floating-element--2"></div>
      <div className="floating-element floating-element--3"></div>
    </div>
  );
}

function Hero() {
  const [ref, isInView] = useInView();

  return (
    <section className="hero" id="inicio" ref={ref}>
      <FloatingElements />
      
      <div className="hero__bg">
        <div className="hero__gradient"></div>
        <div className="hero__grid"></div>
        <div className="hero__noise"></div>
      </div>

      <div className="container hero__container">
        <div className={`hero__content ${isInView ? "animate-in" : ""}`}>
          <div className="hero__badge">
            <span className="hero__badge-pulse"></span>
            <span className="hero__badge-text">🚀 Diagnóstico gratuito por tempo limitado</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">Dual Leads conecta</span>
            <span className="hero__title-line">
              <span className="gradient-text">marketing, comercial</span>
            </span>
            <span className="hero__title-line">
              <span className="gradient-text">e conversão</span> para você
            </span>
            <span className="hero__title-line">crescer com previsibilidade.</span>
          </h1>

          <p className="hero__subtitle">
            Geramos demanda, estruturamos funis, implementamos processo comercial 
            e corrigimos os gargalos que fazem sua empresa <strong>perder lead, tempo e venda</strong>.
          </p>

          <div className="hero__cta">
            <a href={CONFIG.whatsapp} target="_blank" rel="noreferrer" className="btn btn--primary btn--large btn--glow">
              <span className="btn__pulse"></span>
              Quero diagnosticar meu gargalo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#servicos" className="btn btn--glass btn--large">
              Ver como funciona
            </a>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-text">Empresas que confiam:</span>
            <div className="hero__trust-logos">
              <div className="hero__trust-item">+150 operações</div>
              <div className="hero__trust-item">+R$12M gerados</div>
              <div className="hero__trust-item">⭐ 4.9 avaliação</div>
            </div>
          </div>
        </div>

        <div className={`hero__visual ${isInView ? "animate-in animate-in--delay" : ""}`}>
          <div className="hero__card hero__card--main">
            <div className="hero__card-header">
              <span className="hero__card-dot hero__card-dot--green"></span>
              <span className="hero__card-dot hero__card-dot--yellow"></span>
              <span className="hero__card-dot hero__card-dot--red"></span>
            </div>
            <div className="hero__card-content">
              <div className="hero__card-metric">
                <span className="hero__card-metric-value">+247%</span>
                <span className="hero__card-metric-label">Aumento em conversão</span>
              </div>
              <div className="hero__card-chart">
                <div className="hero__card-bar" style={{ height: "30%" }}></div>
                <div className="hero__card-bar" style={{ height: "45%" }}></div>
                <div className="hero__card-bar" style={{ height: "35%" }}></div>
                <div className="hero__card-bar" style={{ height: "60%" }}></div>
                <div className="hero__card-bar" style={{ height: "80%" }}></div>
                <div className="hero__card-bar hero__card-bar--active" style={{ height: "95%" }}></div>
              </div>
            </div>
          </div>
          
          <div className="hero__card hero__card--floating hero__card--stats">
            <span className="hero__card-icon">📈</span>
            <div>
              <span className="hero__card-number">+R$2.4M</span>
              <span className="hero__card-label">Este mês</span>
            </div>
          </div>
          
          <div className="hero__card hero__card--floating hero__card--notification">
            <span className="hero__card-icon">🔔</span>
            <div>
              <span className="hero__card-text">Novo lead qualificado!</span>
              <span className="hero__card-time">Agora mesmo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Role para descobrir</span>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const [ref, isInView] = useInView();

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className={`stats__grid ${isInView ? "animate-in" : ""}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stats__item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="stats__icon">{stat.icon}</span>
              <span className="stats__value">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const [ref, isInView] = useInView();

  return (
    <section className="problem" id="problema" ref={ref}>
      <div className="container">
        <div className={`section-header ${isInView ? "animate-in" : ""}`}>
          <span className="section-tag">
            <span className="section-tag__dot"></span>
            O Problema
          </span>
          <h2 className="section-title">
            Muitas empresas não têm falta de potencial.
            <br />
            <span className="gradient-text">Têm gargalos mal resolvidos.</span>
          </h2>
        </div>

        <div className={`problem__content ${isInView ? "animate-in" : ""}`}>
          <div className="problem__text">
            <p>
              Algumas empresas até geram demanda, mas <strong>perdem oportunidade no atendimento</strong>. 
              Outras investem em tráfego, mas <strong>não têm processo comercial</strong>.
            </p>
            <p>
              Em muitos casos, o problema não está só em gerar mais leads, e sim em 
              <strong> organizar melhor o caminho</strong> entre o primeiro contato e o fechamento.
            </p>
          </div>

          <div className="problem__list">
            <h3>O resultado é sempre parecido:</h3>
            <div className="problem__grid">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className="problem__item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="problem__item-icon">{problem.icon}</span>
                  <span className="problem__item-text">{problem.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`problem__cta ${isInView ? "animate-in" : ""}`}>
          <div className="problem__cta-box">
            <div className="problem__cta-glow"></div>
            <p>
              <strong>A Dual Leads entra justamente nesse ponto:</strong> para organizar 
              a operação inteira entre o interesse e a venda.
            </p>
            <a href={CONFIG.whatsapp} target="_blank" rel="noreferrer" className="btn btn--primary btn--glow">
              <span className="btn__pulse"></span>
              Quero resolver meus gargalos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [ref, isInView] = useInView();
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="services" id="servicos" ref={ref}>
      <div className="container">
        <div className={`section-header ${isInView ? "animate-in" : ""}`}>
          <span className="section-tag">
            <span className="section-tag__dot"></span>
            O que fazemos
          </span>
          <h2 className="section-title">
            Não atuamos só com tráfego pago.
            <br />
            <span className="gradient-text">Atuamos na estrutura que transforma demanda em receita.</span>
          </h2>
          <p className="section-subtitle">
            A Dual Leads organiza marketing e vendas para criar uma operação mais eficiente, previsível e lucrativa.
          </p>
        </div>

        <div className={`services__grid ${isInView ? "animate-in" : ""}`}>
          {services.map((service, index) => (
            <article 
              key={index} 
              className={`service-card ${activeCard === index ? "service-card--active" : ""}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-card__glow"></div>
              <div className="service-card__header">
                <span className="service-card__icon">{service.icon}</span>
                <span className="service-card__number">{service.number}</span>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__list">
                {service.items.map((item, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="service-card__arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  const [ref, isInView] = useInView();

  return (
    <section className="for-who" ref={ref}>
      <div className="container">
        <div className={`for-who__content ${isInView ? "animate-in" : ""}`}>
          <div className="for-who__text">
            <span className="section-tag">
              <span className="section-tag__dot"></span>
              Para quem faz sentido
            </span>
            <h2 className="section-title">
              A Dual Leads tem mais aderência com empresas que dependem de 
              <span className="gradient-text"> lead e conversão consultiva</span>.
            </h2>
            <p className="section-subtitle">
              Se sua empresa precisa gerar mais oportunidades e vender melhor o que já chega, existe aderência.
            </p>
            <a href={CONFIG.whatsapp} target="_blank" rel="noreferrer" className="btn btn--primary btn--glow">
              <span className="btn__pulse"></span>
              Verificar aderência
            </a>
          </div>

          <div className="for-who__list">
            {forWho.map((item, index) => (
              <div 
                key={index} 
                className="for-who__item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="for-who__item-check">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const [ref, isInView] = useInView();

  return (
    <section className="method" id="metodo" ref={ref}>
      <div className="container">
        <div className={`section-header ${isInView ? "animate-in" : ""}`}>
          <span className="section-tag">
            <span className="section-tag__dot"></span>
            Método
          </span>
          <h2 className="section-title">
            Do diagnóstico à implementação,
            <br />
            <span className="gradient-text">com foco no gargalo certo.</span>
          </h2>
        </div>

        <div className={`method__timeline ${isInView ? "animate-in" : ""}`}>
          <div className="method__line"></div>
          {methodology.map((step, index) => (
            <div 
              key={index} 
              className="method__step"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="method__step-marker">
                <span className="method__step-number">{step.step}</span>
              </div>
              <div className="method__step-content">
                <h3 className="method__step-title">{step.title}</h3>
                <p className="method__step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`method__cta ${isInView ? "animate-in" : ""}`}>
          <a href={CONFIG.whatsapp} target="_blank" rel="noreferrer" className="btn btn--primary btn--large btn--glow">
            <span className="btn__pulse"></span>
            Quero uma análise do meu cenário
          </a>
        </div>
      </div>
    </section>
  );
}

function Differential() {
  const [ref, isInView] = useInView();

  return (
    <section className="differential" ref={ref}>
      <div className="container">
        <div className={`differential__grid ${isInView ? "animate-in" : ""}`}>
          <div className="differential__content">
            <span className="section-tag">
              <span className="section-tag__dot"></span>
              Diferencial
            </span>
            <h2 className="section-title">
              A maioria separa marketing de vendas.
              <br />
              <span className="gradient-text">É aí que muita oportunidade morre.</span>
            </h2>
            <p className="differential__description">
              A Dual Leads trabalha na <strong>conexão entre aquisição, processo comercial e conversão</strong>. 
              Em vez de olhar só para clique ou lead, olhamos para o caminho completo até a venda.
            </p>
          </div>

          <div className="differential__list">
            <h3>O que você ganha:</h3>
            {differentials.map((item, index) => (
              <div 
                key={index} 
                className="differential__item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="differential__item-icon">{item.icon}</span>
                <span className="differential__item-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const [ref, isInView] = useInView();

  return (
    <section className="results" id="resultados" ref={ref}>
      <div className="container">
        <div className={`section-header ${isInView ? "animate-in" : ""}`}>
          <span className="section-tag">
            <span className="section-tag__dot"></span>
            Resultados
          </span>
          <h2 className="section-title">
            Quando o gargalo certo é corrigido,
            <br />
            <span className="gradient-text">a operação responde.</span>
          </h2>
        </div>

        <div className={`results__grid ${isInView ? "animate-in" : ""}`}>
          {testimonials.map((testimonial, index) => (
            <article 
              key={index} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="testimonial-card__result">{testimonial.result}</div>
              <div className="testimonial-card__quote">
                <svg className="testimonial-card__quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq" id="faq" ref={ref}>
      <div className="container">
        <div className={`section-header ${isInView ? "animate-in" : ""}`}>
          <span className="section-tag">
            <span className="section-tag__dot"></span>
            FAQ
          </span>
          <h2 className="section-title">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </div>

        <div className={`faq__list ${isInView ? "animate-in" : ""}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "faq-item--open" : ""}`}
            >
              <button
                className="faq-item__question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <div className="faq-item__icon">
                  <span></span>
                  <span></span>
                </div>
              </button>
              <div className="faq-item__answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const [ref, isInView] = useInView();

  return (
    <section className="final-cta" ref={ref}>
      <div className="container">
        <div className={`final-cta__box ${isInView ? "animate-in" : ""}`}>
          <div className="final-cta__bg">
            <div className="final-cta__glow final-cta__glow--1"></div>
            <div className="final-cta__glow final-cta__glow--2"></div>
          </div>
          
          <div className="final-cta__content">
            <span className="section-tag section-tag--light">
              <span className="section-tag__dot"></span>
              Próximo passo
            </span>
            
            <h2 className="final-cta__title">
              Se sua empresa está perdendo venda por falha de demanda, processo ou conversão, 
              o próximo passo é entender <span className="gradient-text">onde o gargalo está</span>.
            </h2>
            
            <p className="final-cta__subtitle">
              Fale com a Dual Leads e descubra o que precisa ser ajustado para 
              sua operação crescer com mais previsibilidade.
            </p>

            <div className="final-cta__buttons">
              <a href={CONFIG.whatsapp} target="_blank" rel="noreferrer" className="btn btn--white btn--large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quero falar com um especialista
              </a>
              <a href={CONFIG.whatsapp} target="_blank" rel="noreferrer" className="btn btn--glass-light btn--large">
                Quero diagnosticar meu funil
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <Logo />
            <p>
              Dual Leads é uma operação de marketing e comercial focada em geração de demanda, 
              estruturação de funis, implementação comercial e aumento de conversão.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4>Navegação</h4>
              <a href="#problema">O Problema</a>
              <a href="#servicos">Serviços</a>
              <a href="#metodo">Método</a>
              <a href="#resultados">Resultados</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer__column">
              <h4>Contato</h4>
              <a href={CONFIG.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={`mailto:${CONFIG.email}`}>Email</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Dual Leads. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={CONFIG.whatsapp}
      target="_blank"
      rel="noreferrer"
      className={`whatsapp-float ${isVisible ? "whatsapp-float--visible" : ""}`}
    >
      <span className="whatsapp-float__ping"></span>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ============================================
// APP PRINCIPAL
// ============================================
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Services />
        <ForWho />
        <Method />
        <Differential />
        <Results />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
