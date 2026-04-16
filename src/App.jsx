import React, { useState, useEffect } from "react";
import dleadsLogo from "./assets/dleads-logo.jpeg";

// ============================================
// DADOS
// ============================================
const whatsappHref =
  "https://wa.me/556181963957?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20D%27Leads%20e%20quero%20estruturar%20meu%20marketing%20e%20vendas.";

const metrics = [
  { value: "+150", label: "Clientes atendidos" },
  { value: "+R$12M", label: "Em vendas geradas" },
  { value: "+5", label: "Anos de mercado" },
  { value: "4.9", label: "AvaliaÃ§Ã£o mÃ©dia" },
];

const services = [
  {
    icon: "ðŸ“Š",
    title: "MÃ­dia Paga",
    description: "Google Ads e Meta Ads com gestÃ£o ativa, otimizaÃ§Ã£o contÃ­nua e foco em ROI.",
    items: ["Google Ads", "Meta Ads", "Remarketing", "OtimizaÃ§Ã£o de conversÃ£o"],
  },
  {
    icon: "ðŸŽ¯",
    title: "Marketing Digital",
    description: "Landing pages, criativos, copy e ofertas que convertem visitantes em leads.",
    items: ["Landing Pages", "Criativos", "Copywriting", "Funis de venda"],
  },
  {
    icon: "ðŸ’¼",
    title: "Processo Comercial",
    description: "Scripts, CRM e rotinas que transformam leads em clientes pagantes.",
    items: ["QualificaÃ§Ã£o", "Follow-up", "Scripts de venda", "RecuperaÃ§Ã£o"],
  },
  {
    icon: "âš™ï¸",
    title: "Tecnologia & Dados",
    description: "AutomaÃ§Ãµes, dashboards e tracking para decisÃµes baseadas em dados reais.",
    items: ["CRM", "AutomaÃ§Ãµes", "Dashboards", "Tracking avanÃ§ado"],
  },
];

const steps = [
  {
    number: "01",
    title: "DiagnÃ³stico",
    description: "Analisamos seu negÃ³cio, metas, gargalos e oportunidades de crescimento.",
  },
  {
    number: "02",
    title: "EstruturaÃ§Ã£o",
    description: "Montamos sua mÃ¡quina de vendas: trÃ¡fego, pÃ¡ginas, CRM e processos.",
  },
  {
    number: "03",
    title: "OperaÃ§Ã£o",
    description: "Executamos, otimizamos e escalamos com acompanhamento semanal.",
  },
];

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechSolutions",
    text: "Em 3 meses triplicamos nossos leads qualificados. A D'Leads entende de verdade o que Ã© performance.",
    avatar: "CM",
  },
  {
    name: "Ana Paula",
    role: "Diretora, ClÃ­nica EstÃ©tica",
    text: "Finalmente encontramos uma assessoria que entrega resultado de verdade. Recomendo demais!",
    avatar: "AP",
  },
  {
    name: "Roberto Silva",
    role: "Founder, ImobiliÃ¡ria RS",
    text: "O processo comercial que implementaram mudou nosso jogo. Vendemos 40% mais no primeiro trimestre.",
    avatar: "RS",
  },
];

const faqs = [
  {
    question: "Quanto tempo para ver resultados?",
    answer: "Nossos clientes comeÃ§am a ver resultados nas primeiras 2-4 semanas. Resultados consistentes e escalÃ¡veis geralmente aparecem a partir do segundo mÃªs.",
  },
  {
    question: "Qual o investimento mÃ­nimo em mÃ­dia?",
    answer: "Recomendamos um investimento mÃ­nimo de R$3.000/mÃªs em mÃ­dia paga para ter dados suficientes para otimizaÃ§Ã£o. O valor ideal depende do seu mercado e metas.",
  },
  {
    question: "VocÃªs atendem qual tipo de empresa?",
    answer: "Atendemos empresas de serviÃ§o, negÃ³cios locais, clÃ­nicas, imobiliÃ¡rias, educaÃ§Ã£o e qualquer negÃ³cio que venda para outras empresas ou consumidores finais.",
  },
  {
    question: "Como funciona o acompanhamento?",
    answer: "VocÃª terÃ¡ reuniÃµes semanais de alinhamento, acesso a dashboards em tempo real e um canal direto de comunicaÃ§Ã£o via WhatsApp para dÃºvidas rÃ¡pidas.",
  },
];

// ============================================
// COMPONENTES
// ============================================
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#inicio" className="logo">
          <img className="logo__image" src={dleadsLogo} alt="Logo D'Leads" />
          <span className="logo__text">D&apos;Leads</span>
        </a>

        <nav className={`nav ${isMobileMenuOpen ? "nav--open" : ""}`}>
          <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>ServiÃ§os</a>
          <a href="#metodo" onClick={() => setIsMobileMenuOpen(false)}>MÃ©todo</a>
          <a href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)}>Depoimentos</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
        </nav>

        <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn--primary btn--header">
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
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
      </div>
      
      <div className="container hero__content">
        <div className="hero__badge">
          <span className="pulse"></span>
          ðŸš€ Vagas limitadas para Abril
        </div>

        <h1 className="hero__title">
          Estruturamos seu <span className="gradient-text">marketing e vendas</span> para vocÃª vender mais todos os meses
        </h1>

        <p className="hero__subtitle">
          MÃ­dia paga, landing pages, CRM e processo comercial integrados em uma Ãºnica operaÃ§Ã£o. 
          Pare de perder leads e comece a escalar com previsibilidade.
        </p>

        <div className="hero__cta">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn--primary btn--large">
            Quero escalar minhas vendas
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#servicos" className="btn btn--ghost btn--large">
            Ver como funciona
          </a>
        </div>

        <div className="hero__metrics">
          {metrics.map((metric, index) => (
            <div key={index} className="metric">
              <span className="metric__value">{metric.value}</span>
              <span className="metric__label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll">
        <span>Role para descobrir</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
}

function LogoBar() {
  return (
    <section className="logo-bar">
      <div className="container">
        <p className="logo-bar__title">Empresas que confiam na D&apos;Leads</p>
        <div className="logo-bar__track">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="logo-bar__item">
              <span>Cliente {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ServiÃ§os</span>
          <h2 className="section-title">
            Tudo que vocÃª precisa para <span className="gradient-text">vender mais</span>
          </h2>
          <p className="section-subtitle">
            Uma estrutura completa de marketing e vendas operando pelo seu negÃ³cio.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__list">
                {service.items.map((item, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="method" id="metodo">
      <div className="container">
        <div className="section-header section-header--light">
          <span className="section-tag">MÃ©todo</span>
          <h2 className="section-title">
            Do diagnÃ³stico ao <span className="gradient-text">resultado</span>
          </h2>
          <p className="section-subtitle">
            Um processo validado com mais de 150 empresas para estruturar sua mÃ¡quina de vendas.
          </p>
        </div>

        <div className="method__steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step__number">{step.number}</div>
              <div className="step__content">
                <h3 className="step__title">{step.title}</h3>
                <p className="step__description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step__connector"></div>}
            </div>
          ))}
        </div>

        <div className="method__cta">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn--primary btn--large">
            Iniciar meu diagnÃ³stico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Depoimentos</span>
          <h2 className="section-title">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="testimonial-card">
              <div className="testimonial-card__stars">â˜…â˜…â˜…â˜…â˜…</div>
              <p className="testimonial-card__text">"{testimonial.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{testimonial.avatar}</div>
                <div>
                  <strong>{testimonial.name}</strong>
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
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header section-header--light">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </div>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? "faq-item--open" : ""}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-item__question">
                <span>{faq.question}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
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

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__box">
          <div className="cta__content">
            <span className="section-tag">PrÃ³ximo passo</span>
            <h2 className="cta__title">
              Pronto para <span className="gradient-text">escalar</span> suas vendas?
            </h2>
            <p className="cta__subtitle">
              Agende uma conversa gratuita com nosso time e descubra como podemos ajudar seu negÃ³cio a crescer.
            </p>
            
            <div className="cta__buttons">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn--primary btn--large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
              </a>
              <a href="mailto:agenciadlead@gmail.com" className="btn btn--outline btn--large">
                Enviar email
              </a>
            </div>

            <div className="cta__contact">
              <div>
                <strong>WhatsApp</strong>
                <span>+55 61 8196-3957</span>
              </div>
              <div>
                <strong>Email</strong>
                <span>agenciadlead@gmail.com</span>
              </div>
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
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#inicio" className="logo">
            <img className="logo__image" src={dleadsLogo} alt="Logo D'Leads" />
          <span className="logo__text">D&apos;Leads</span>
          </a>
          <p>Marketing, mÃ­dia paga e processos comerciais para empresas que querem crescer.</p>
        </div>

        <div className="footer__links">
          <div>
            <h4>NavegaÃ§Ã£o</h4>
            <a href="#servicos">ServiÃ§os</a>
            <a href="#metodo">MÃ©todo</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h4>Contato</h4>
            <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:agenciadlead@gmail.com">Email</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>Â© 2024 D&apos;Leads. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a href={whatsappHref} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
        <LogoBar />
        <Services />
        <Method />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}




