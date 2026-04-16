import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoTransparente from './assets/logo_transparente_alta_resolucao.png';
import { 
  Target, 
  BarChart3, 
  Zap, 
  Settings, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  MessageCircle,
  TrendingUp,
  Users,
  Database,
  Play,
  Star,
  Quote,
  Check
} from 'lucide-react';

// ==================== DATA ====================
const services = [
  {
    number: "01",
    title: "Geração de Demanda",
    description: "Geramos leads qualificados para sua empresa parar de queimar verba com demanda ruim.",
    items: ["Meta Ads", "Google Ads", "Landing Pages", "Captação de Leads"],
    icon: Target,
    fullDescription: "Se sua empresa anuncia, mas ainda sofre com lead ruim, campanha instável ou falta de previsibilidade, o problema não é só tráfego. É estrutura. A Dual Leads monta a aquisição para atrair o público certo, com a oferta certa, e transformar investimento em oportunidade real de venda.",
    benefits: [
      "Campanhas com foco em oportunidade, não só clique",
      "Segmentação para atrair lead com mais intenção",
      "Estrutura de conversão alinhada com oferta e público",
      "Testes contínuos para reduzir desperdício",
      "Leitura clara dos números para otimizar com segurança"
    ],
    results: "Mais lead qualificado, menos desperdício e mais previsibilidade na aquisição."
  },
  {
    number: "02",
    title: "Funil e Conversão",
    description: "Corrigimos o funil para você parar de perder lead no meio do caminho.",
    items: ["Mapeamento de Funil", "Qualificação", "Follow-up", "Conversão"],
    icon: BarChart3,
    fullDescription: "Muita empresa acha que precisa de mais lead, quando na verdade está desperdiçando os que já entram. Nós analisamos o funil, identificamos onde a conversão quebra e ajustamos o processo para fazer mais oportunidade avançar até a venda.",
    benefits: [
      "Diagnóstico do funil atual",
      "Identificação de gargalos e pontos de perda",
      "Ajuste da qualificação e da passagem entre etapas",
      "Follow-up mais eficiente",
      "Métricas claras para acompanhar conversão"
    ],
    results: "Mais aproveitamento da demanda e menos lead perdido ao longo do funil."
  },
  {
    number: "03",
    title: "Implementação Comercial",
    description: "Estruturamos o comercial para sua operação vender com processo, não no improviso.",
    items: ["Processo Comercial", "Scripts", "Rotina de Vendas", "Atendimento"],
    icon: Zap,
    fullDescription: "Lead bom em comercial bagunçado também vira desperdício. A Dual Leads organiza processo, rotina, abordagem e pipeline para sua equipe atender melhor, avançar com mais consistência e converter com mais controle.",
    benefits: [
      "Processo comercial estruturado",
      "Scripts e abordagens mais eficientes",
      "Rotina de atendimento e follow-up",
      "Padronização da operação comercial",
      "Mais clareza sobre pipeline e produtividade"
    ],
    results: "Mais organização, mais eficiência e mais consistência nas vendas."
  },
  {
    number: "04",
    title: "Dados, CRM e Automação",
    description: "Implementamos CRM, dashboards e automações para sua empresa parar de operar no escuro.",
    items: ["CRM", "Dashboards", "Tracking", "Automações"],
    icon: Settings,
    fullDescription: "Se você não enxerga o funil, não sabe onde perde lead, onde trava conversão e onde desperdiça dinheiro. Estruturamos CRM, dashboards e automações para dar visibilidade real da operação e transformar dado em decisão prática.",
    benefits: [
      "CRM ajustado ao processo da operação",
      "Dashboards com visão clara do funil",
      "Automação de tarefas repetitivas",
      "Integração entre ferramentas",
      "Rastreamento da jornada do lead"
    ],
    results: "Mais visibilidade, mais controle e mais decisão baseada em dado real."
  },
];

const problems = [
  {
    icon: TrendingUp,
    title: "Lead que não compra",
    description: "Volume alto, conversão baixa. Você atrai curiosos, não compradores."
  },
  {
    icon: Users,
    title: "Comercial desorganizado",
    description: "Sem processo, sem rotina, sem previsibilidade. Cada vendedor faz do seu jeito."
  },
  {
    icon: Database,
    title: "Sem visão do funil",
    description: "Você não sabe onde perde lead, onde trava e onde está o gargalo real."
  },
  {
    icon: BarChart3,
    title: "Decisão no escuro",
    description: "Sem dados confiáveis, toda decisão vira achismo. E achismo custa caro."
  }
];

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechSolutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "A Dual Leads transformou nossa operação comercial. Em 3 meses, dobramos a conversão e finalmente temos previsibilidade."
  },
  {
    name: "Ana Paula Silva",
    role: "Diretora Comercial, Innovare",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "Paramos de desperdiçar lead. Hoje sabemos exatamente onde cada oportunidade está e por que converte ou não."
  },
  {
    name: "Roberto Almeida",
    role: "Founder, StartupX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "O diagnóstico foi certeiro. Descobrimos que o problema não era lead, era processo. Hoje vendemos 3x mais com a mesma equipe."
  }
];

const stats = [
  { value: "+150%", label: "Aumento médio em leads qualificados" },
  { value: "3x", label: "Mais conversão no funil" },
  { value: "-40%", label: "Redução no custo por aquisição" },
  { value: "100%", label: "Visibilidade do funil" }
];

// ==================== COMPONENTS ====================

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Método', href: '#metodo' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <img className="logo-image" src={logoTransparente} alt="Logo Dual Leads" />
        </a>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn btn-primary header-cta">
          Falar com especialista
        </a>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contato" className="btn btn-primary mobile-cta">
              Falar com especialista
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Estrutura comercial que gera resultado
          </div>
          
          <h1 className="hero-title">
            Sua empresa não precisa de mais lead.
            <span className="hero-title-highlight"> Precisa converter melhor.</span>
          </h1>
          
          <p className="hero-subtitle">
            Estruturamos aquisição, funil e processo comercial para empresas que querem parar de desperdiçar oportunidade e começar a vender com consistência.
          </p>
          
          <div className="hero-ctas">
            <a href="#contato" className="btn btn-primary btn-lg">
              Quero um diagnóstico gratuito
              <ArrowRight size={20} />
            </a>
            <a href="#metodo" className="btn btn-secondary btn-lg">
              <Play size={20} />
              Ver como funciona
            </a>
          </div>

          <div className="hero-proof">
            <div className="hero-avatars">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face" alt="" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="" />
            </div>
            <div className="hero-proof-text">
              <div className="hero-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <span>+50 empresas já estruturaram suas vendas</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="dashboard-title">Funil de Vendas</span>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-stat">
                <span className="stat-label">Leads Qualificados</span>
                <span className="stat-value">+247%</span>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="dashboard-stat">
                <span className="stat-label">Taxa de Conversão</span>
                <span className="stat-value">32.5%</span>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{width: '65%'}}></div>
                </div>
              </div>
              <div className="dashboard-stat">
                <span className="stat-label">Custo por Lead</span>
                <span className="stat-value green">-40%</span>
                <div className="stat-bar">
                  <div className="stat-bar-fill green" style={{width: '40%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Problems Section
const Problems = () => {
  return (
    <section className="problems" id="problemas">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">O problema</span>
          <h2 className="section-title">
            Reconhece algum desses sintomas?
          </h2>
          <p className="section-subtitle">
            Se sua operação comercial tem algum desses sinais, o problema não é falta de lead. É falta de estrutura.
          </p>
        </motion.div>

        <div className="problems-grid">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="problem-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="problem-icon">
                <problem.icon size={24} />
              </div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Modal Component
const ServiceModal = ({ service, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <div className="modal-icon">
                <service.icon size={32} />
              </div>
              <div>
                <span className="modal-number">{service.number}</span>
                <h3 className="modal-title">{service.title}</h3>
              </div>
            </div>

            <p className="modal-description">{service.fullDescription}</p>

            <div className="modal-benefits">
              <h4>O que entregamos:</h4>
              <ul>
                {service.benefits.map((benefit, index) => (
                  <li key={index}>
                    <Check size={18} className="benefit-check" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-results">
              <h4>Resultado:</h4>
              <p>{service.results}</p>
            </div>

            <a href="#contato" className="btn btn-primary btn-lg modal-cta" onClick={onClose}>
              Quero esse serviço
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Services Section
const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services" id="servicos">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Nossos serviços</span>
          <h2 className="section-title">
            Estrutura completa para sua operação vender mais
          </h2>
          <p className="section-subtitle">
            Da geração de demanda até o fechamento. Atuamos em cada etapa do funil para eliminar gargalos e aumentar conversão.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-header">
                <span className="service-number">{service.number}</span>
                <div className="service-icon">
                  <service.icon size={24} />
                </div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-items">
                {service.items.map((item, i) => (
                  <span key={i} className="service-item">{item}</span>
                ))}
              </div>

              <button 
                className="service-link"
                onClick={() => setSelectedService(service)}
              >
                Saiba mais <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal 
        service={selectedService}
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

// Method Section
const Method = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Analisamos sua operação atual, identificamos gargalos e mapeamos onde você está perdendo oportunidade."
    },
    {
      number: "02",
      title: "Estratégia",
      description: "Desenhamos o plano de ação com prioridades claras para destravar sua operação comercial."
    },
    {
      number: "03",
      title: "Implementação",
      description: "Colocamos a estrutura para rodar: funil, processo, ferramentas e métricas."
    },
    {
      number: "04",
      title: "Otimização",
      description: "Acompanhamos os resultados e ajustamos continuamente para melhorar a conversão."
    }
  ];

  return (
    <section className="method" id="metodo">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Nosso método</span>
          <h2 className="section-title">
            Como transformamos sua operação
          </h2>
          <p className="section-subtitle">
            Um processo estruturado para sair do caos comercial e chegar em vendas consistentes.
          </p>
        </motion.div>

        <div className="method-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="method-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section
const Stats = () => {
  return (
    <section className="stats" id="resultados">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Depoimentos</span>
          <h2 className="section-title">
            Quem já estruturou com a Dual Leads
          </h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <span className="author-name">{testimonial.name}</span>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTA = () => {
  return (
    <section className="cta" id="contato">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title">
            Pronto para parar de desperdiçar oportunidade?
          </h2>
          <p className="cta-subtitle">
            Solicite um diagnóstico gratuito e descubra onde sua operação está travando.
          </p>
          <div className="cta-buttons">
            <a 
              href="https://wa.me/5511999999999?text=Olá! Quero um diagnóstico gratuito da minha operação comercial." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </div>
          <p className="cta-note">
            Diagnóstico gratuito • Sem compromisso • Resposta em até 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img className="logo-image" src={logoTransparente} alt="Logo Dual Leads" />
            </a>
            <p className="footer-description">
              Estruturamos aquisição, funil e processo comercial para empresas que querem vender mais e melhor.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navegação</h4>
              <a href="#servicos">Serviços</a>
              <a href="#metodo">Método</a>
              <a href="#resultados">Resultados</a>
              <a href="#contato">Contato</a>
            </div>
            <div className="footer-column">
              <h4>Serviços</h4>
              <a href="#servicos">Geração de Demanda</a>
              <a href="#servicos">Funil e Conversão</a>
              <a href="#servicos">Implementação Comercial</a>
              <a href="#servicos">Dados e Automação</a>
            </div>
            <div className="footer-column">
              <h4>Contato</h4>
              <a href="mailto:contato@dualleads.com.br">contato@dualleads.com.br</a>
              <a href="https://wa.me/556181963957" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Dual Leads. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// ==================== MAIN APP ====================
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Method />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
