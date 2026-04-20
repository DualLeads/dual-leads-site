import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Database,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Quote,
  Settings,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react';
import logoTransparente from './assets/logo_transparente_alta_resolucao.png';

const COMPANY = {
  name: "D'Leads",
  cnpj: '29.020.766/0001-10',
  email: 'contato@dualeads.com',
  whatsapp: '556181963957',
  whatsappMessage:
    "Olá! Quero entender como a D'Leads pode estruturar marketing, mídia paga e comercial para o meu negócio.",
  city: 'Brasilia - DF, Brasil',
  address:
    'Aguas Claras Sul, Quadra 204, Condominio Residencial Fenix, Bloco B, 3 andar, Apartamento 301, Brasilia - DF, Brasil',
};

const services = [
  {
    number: '01',
    title: 'Mídia paga e aquisição',
    description:
      'Planejamento, execução e otimização de campanhas para gerar demanda com mais intenção de compra.',
    items: ['Google Ads', 'Meta Ads', 'Landing Pages', 'Aquisição'],
    icon: Target,
    fullDescription:
      "A D'Leads estrutura a frente de aquisição com foco em previsibilidade comercial, leitura de dados e eficiência de investimento. Não operamos apenas anúncios: conectamos oferta, segmentação, jornada e meta de negócio.",
    benefits: [
      'Planejamento de campanhas alinhado ao momento da empresa',
      'Estrutura de tráfego orientada a lead qualificado e oportunidade real',
      'Testes de criativo, público e oferta para reduzir desperdício',
      'Acompanhamento de métricas de aquisição e eficiência',
      'Ajustes contínuos com base em performance',
    ],
    results:
      'Mais clareza sobre o investimento, melhor aproveitamento do tráfego e crescimento com base em dados.',
  },
  {
    number: '02',
    title: 'Funil e conversão',
    description:
      'Organização da jornada comercial para reduzir perdas, aumentar resposta e melhorar a taxa de fechamento.',
    items: ['Funil', 'Qualificação', 'Follow-up', 'Conversão'],
    icon: BarChart3,
    fullDescription:
      'Muitas operações perdem resultado entre a entrada do lead e a conversa comercial. Revisamos o funil, identificamos gargalos, ajustamos critérios de qualificação e organizamos a passagem entre marketing e vendas.',
    benefits: [
      'Mapeamento das etapas do funil atual',
      'Diagnóstico de perda entre captação, atendimento e venda',
      'Ajuste de critérios de qualificação',
      'Melhoria do fluxo de atendimento e acompanhamento',
      'Métricas claras para acompanhar avanço e conversão',
    ],
    results:
      'Mais aproveitamento do lead gerado e uma operação mais consistente do primeiro contato ao fechamento.',
  },
  {
    number: '03',
    title: 'Implementação comercial',
    description:
      'Estruturação de processo, rotina, abordagem e controle para operações que querem vender sem improviso.',
    items: ['Processo Comercial', 'Scripts', 'Rotina', 'Atendimento'],
    icon: Zap,
    fullDescription:
      "A D'Leads também atua na implementação comercial, criando base operacional para que a demanda gerada se transforme em receita. Isso inclui organização de pipeline, rotina, abordagem, priorização e disciplina de acompanhamento.",
    benefits: [
      'Desenho ou refinamento do processo comercial',
      'Padronização de scripts e abordagem',
      'Rotina de atendimento e follow-up',
      'Melhor leitura de produtividade comercial',
      'Mais consistência na execução da equipe',
    ],
    results:
      'Comercial mais organizado, acompanhamento mais forte e aumento de previsibilidade no fechamento.',
  },
  {
    number: '04',
    title: 'Automação, dados e tecnologia',
    description:
      'CRM, tracking, dashboards e automações para dar visibilidade operacional e acelerar decisões.',
    items: ['CRM', 'Dashboards', 'Tracking', 'Automações'],
    icon: Settings,
    fullDescription:
      "Para sustentar crescimento, a operação precisa de tecnologia e processos internos. Implementamos CRM, automações, integrações e leitura de performance para conectar marketing, mídia paga, comercial e gestão.",
    benefits: [
      'Configuração ou ajuste de CRM conforme a operação',
      'Dashboards para acompanhamento de marketing e vendas',
      'Rastreamento da jornada do lead',
      'Automações para tarefas repetitivas e resposta mais rápida',
      'Integração entre ferramentas e áreas do negócio',
    ],
    results:
      'Mais controle operacional, menos retrabalho e decisões mais rápidas com base em informação confiável.',
  },
];

const problems = [
  {
    icon: TrendingUp,
    title: 'Lead sem intenção de compra',
    description:
      'A empresa investe em tráfego, mas atrai volume sem qualidade e sente a conversão travada.',
  },
  {
    icon: Users,
    title: 'Marketing e comercial desconectados',
    description:
      'A passagem entre geração de demanda e fechamento é falha, o que aumenta perda e reduz previsibilidade.',
  },
  {
    icon: Database,
    title: 'Falta de visibilidade operacional',
    description:
      'Sem CRM bem estruturado, dashboards e tracking, fica difícil saber onde a operação perde resultado.',
  },
  {
    icon: BarChart3,
    title: 'Decisão baseada em percepção',
    description:
      'Sem dados consistentes, a empresa otimiza pouco e toma decisões sem evidência clara de performance.',
  },
];

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, TechSolutions',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    text: 'A operação ficou muito mais previsível. Saímos do improviso comercial para um processo com meta, acompanhamento e clareza.',
  },
  {
    name: 'Ana Paula Silva',
    role: 'Diretora Comercial, Innovare',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    text: "A D'Leads organizou marketing e vendas como uma mesma operação. Hoje entendemos onde o lead entra, avança e converte.",
  },
  {
    name: 'Roberto Almeida',
    role: 'Founder, StartupX',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    text: 'O ganho não foi só em tráfego. Veio junto processo, leitura de dados e disciplina comercial para crescer com base mais sólida.',
  },
];

const stats = [
  { value: '+150%', label: 'Ganho médio em volume qualificado' },
  { value: '3x', label: 'Mais eficiência de conversão em operações estruturadas' },
  { value: '-40%', label: 'Redução potencial no custo por aquisição' },
  { value: '100%', label: 'Foco em leitura de funil e performance' },
];

const businessHighlights = [
  {
    icon: Building2,
    title: "Quem é a D'Leads",
    description:
      "A D'Leads é uma operação brasileira especializada em marketing, mídia paga, aquisição, automação e crescimento comercial para empresas que precisam de mais controle e performance.",
  },
  {
    icon: Settings,
    title: 'Como atuamos',
    description:
      'Usamos ferramentas, processos internos, CRM, tracking, dashboards e rotinas de gestão para operar campanhas e organizar a jornada comercial com visão de negócio.',
  },
  {
    icon: ShieldCheck,
    title: 'Atuação legítima e autorizada',
    description:
      'A operação é profissional, voltada para negócios próprios e contas gerenciadas de forma autorizada, com foco em execução responsável e transparência.',
  },
];

const privacyItems = [
  {
    title: 'Dados que podem ser coletados',
    text:
      'Podemos receber dados enviados voluntariamente por e-mail, WhatsApp ou outros canais de contato, como nome, telefone, empresa, cargo, interesse comercial e contexto da demanda. Também podem existir dados técnicos básicos de navegação, como IP, tipo de dispositivo, navegador e páginas acessadas.',
  },
  {
    title: 'Como esses dados são utilizados',
    text:
      'As informações são usadas para responder contatos, conduzir atendimento comercial, avaliar aderência de serviços, melhorar a experiência no site, organizar a operação de marketing e comunicação e acompanhar a performance das ações da empresa.',
  },
  {
    title: 'Cookies, analytics e pixels',
    text:
      'Este site institucional pode utilizar cookies técnicos e ferramentas de mensuração para entender navegação, desempenho das páginas e efetividade de campanhas. Quando houver uso de analytics, pixels ou outras ferramentas de acompanhamento, eles serão empregados para análise agregada, otimização de mídia e melhoria da experiência.',
  },
  {
    title: 'Proteção e tratamento das informações',
    text:
      'A D\'Leads adota medidas administrativas e tecnológicas compatíveis com o porte da operação para reduzir risco de acesso indevido, uso não autorizado, alteração ou perda de dados. O acesso às informações é restrito ao necessário para atendimento e operação.',
  },
  {
    title: 'Contato sobre privacidade',
    text:
      "Solicitações relacionadas a dados, privacidade ou atualização de informações podem ser feitas pelo e-mail contato@dualeads.com. Mantemos esta política disponível para consulta pública e a atualizamos quando necessário.",
  },
];

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
    { label: 'About Us', href: '#about-us' },
    { label: 'Privacy Policy', href: '#privacy-policy' },
    { label: 'Contact', href: '#business-info' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#topo" className="logo" aria-label="Ir para o topo">
          <img className="logo-image" src={logoTransparente} alt="Logo D'Leads" />
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
          aria-label="Abrir menu"
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
            <a
              href="#contato"
              className="btn btn-primary mobile-cta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Falar com especialista
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="topo">
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
            Operação profissional de marketing, tráfego e tecnologia
          </div>

          <h1 className="hero-title">
            Marketing, mídia paga e comercial com
            <span className="hero-title-highlight"> estrutura para crescer.</span>
          </h1>

          <p className="hero-subtitle">
            A D&apos;Leads opera aquisição, performance, automação e crescimento comercial
            para negócios que precisam de previsibilidade, processo e leitura real de funil.
          </p>

          <div className="hero-ctas">
            <a href="#contato" className="btn btn-primary btn-lg">
              Solicitar diagnóstico
              <ArrowRight size={20} />
            </a>
            <a href="#about-us" className="btn btn-secondary btn-lg">
              <Play size={20} />
              Conhecer a operação
            </a>
          </div>

          <div className="hero-proof">
            <div className="hero-avatars">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                alt=""
              />
            </div>
            <div className="hero-proof-text">
              <div className="hero-stars">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <span>Operação voltada para contas próprias e gerenciadas de forma autorizada</span>
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
              <span className="dashboard-title">Operação de Performance</span>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-stat">
                <span className="stat-label">Aquisição com intenção</span>
                <span className="stat-value">+247%</span>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="dashboard-stat">
                <span className="stat-label">Taxa de avanço no funil</span>
                <span className="stat-value">32.5%</span>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="dashboard-stat">
                <span className="stat-label">Eficiência de mídia</span>
                <span className="stat-value green">-40%</span>
                <div className="stat-bar">
                  <div className="stat-bar-fill green" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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
          <span className="section-tag">Diagnóstico</span>
          <h2 className="section-title">Sinais de que a operação precisa de estrutura</h2>
          <p className="section-subtitle">
            A D&apos;Leads atua quando marketing, mídia paga e comercial precisam deixar de
            operar de forma fragmentada e passar a trabalhar com processo, tecnologia e
            acompanhamento.
          </p>
        </motion.div>

        <div className="problems-grid">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
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

const ServiceModal = ({ isOpen, onClose, service }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service) {
    return null;
  }

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
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Fechar modal">
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
              <h4>O que entregamos</h4>
              <ul>
                {service.benefits.map((benefit) => (
                  <li key={benefit}>
                    <Check size={18} className="benefit-check" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-results">
              <h4>Resultado esperado</h4>
              <p>{service.results}</p>
            </div>

            <a href="#contato" className="btn btn-primary btn-lg modal-cta" onClick={onClose}>
              Falar com a D&apos;Leads
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

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
          <span className="section-tag">Serviços</span>
          <h2 className="section-title">Marketing, mídia paga e operação comercial integrados</h2>
          <p className="section-subtitle">
            A empresa atua com implementação de marketing, gestão de mídia paga, organização
            de aquisição, automação e estrutura comercial para sustentar crescimento com mais
            consistência.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                {service.items.map((item) => (
                  <span key={item} className="service-item">
                    {item}
                  </span>
                ))}
              </div>

              <button className="service-link" onClick={() => setSelectedService(service)}>
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

const Method = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico operacional',
      description:
        'Analisamos aquisição, estrutura comercial, dados e tecnologia para entender onde a operação perde eficiência.',
    },
    {
      number: '02',
      title: 'Desenho da estratégia',
      description:
        'Definimos prioridades, metas, estrutura de funil, indicadores e plano de implementação alinhado ao negócio.',
    },
    {
      number: '03',
      title: 'Implementação',
      description:
        'Executamos ajustes de campanhas, CRM, dashboards, processo comercial, automações e rotina de acompanhamento.',
    },
    {
      number: '04',
      title: 'Otimização contínua',
      description:
        'Acompanhamos performance, leitura de dados e evolução da operação para sustentar crescimento com consistência.',
    },
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
          <span className="section-tag">Método</span>
          <h2 className="section-title">Estrutura para crescer com mais previsibilidade</h2>
          <p className="section-subtitle">
            O foco da D&apos;Leads é transformar operação dispersa em um sistema comercial e
            de marketing mais claro, mensurável e confiável.
          </p>
        </motion.div>

        <div className="method-steps">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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

const Stats = () => {
  return (
    <section className="stats" id="resultados">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
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
          <span className="section-tag">Percepção de valor</span>
          <h2 className="section-title">Estrutura que melhora leitura, controle e conversão</h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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

const AboutUs = () => {
  return (
    <section className="compliance-section" id="about-us">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Uma operação real, profissional e verificável</h2>
          <p className="section-subtitle">
            A D&apos;Leads atua com marketing, mídia paga, aquisição, automação e growth
            comercial para negócios que precisam de execução responsável, processo interno e
            acompanhamento de performance.
          </p>
        </motion.div>

        <div className="compliance-grid">
          {businessHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="compliance-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="compliance-icon">
                <item.icon size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="institutional-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="institutional-copy">
            <span className="institutional-label">Posicionamento institucional</span>
            <p>
              A D&apos;Leads opera campanhas, processos internos de marketing e rotinas de
              gestão comercial com suporte de ferramentas, CRM, automações e leitura de
              desempenho. A empresa presta serviços para negócios próprios e para contas
              gerenciadas de forma autorizada, mantendo foco em performance, transparência e
              legitimidade operacional.
            </p>
          </div>
          <div className="institutional-badges">
            <div className="institutional-badge">
              <CheckCircle2 size={18} />
              Marketing e mídia paga
            </div>
            <div className="institutional-badge">
              <CheckCircle2 size={18} />
              Aquisição e performance
            </div>
            <div className="institutional-badge">
              <CheckCircle2 size={18} />
              Automação e CRM
            </div>
            <div className="institutional-badge">
              <CheckCircle2 size={18} />
              Implementação comercial
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BusinessInfo = () => {
  return (
    <section className="business-info" id="business-info">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Informações comerciais e endereço físico</h2>
          <p className="section-subtitle">
            Esta área reúne os dados institucionais e de contato da empresa de forma clara,
            acessível e verificável.
          </p>
        </motion.div>

        <div className="business-grid">
          <motion.div
            className="business-card business-card-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>{COMPANY.name}</h3>
            <p className="business-cnpj">CNPJ: {COMPANY.cnpj}</p>
            <div className="business-list">
              <div className="business-item">
                <MapPin size={20} />
                <span>{COMPANY.address}</span>
              </div>
              <div className="business-item">
                <Mail size={20} />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
              <div className="business-item">
                <MessageCircle size={20} />
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                    COMPANY.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp comercial
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="business-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3>Business Information</h3>
            <p>
              A empresa opera a partir de endereço físico real em Brasilia - DF, Brasil, e
              mantém canal público de contato por e-mail e WhatsApp para demandas comerciais
              e institucionais.
            </p>
            <ul className="business-checks">
              <li>
                <CheckCircle2 size={18} />
                Endereço comercial visível no site e no footer
              </li>
              <li>
                <CheckCircle2 size={18} />
                E-mail institucional público
              </li>
              <li>
                <CheckCircle2 size={18} />
                Identificação empresarial com CNPJ
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PrivacyPolicy = () => {
  return (
    <section className="compliance-section compliance-section-alt" id="privacy-policy">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Privacy Policy</span>
          <h2 className="section-title">Política de privacidade clara e acessível</h2>
          <p className="section-subtitle">
            Esta política resume como a D&apos;Leads pode coletar, utilizar, proteger e
            tratar informações relacionadas à navegação e ao contato comercial em seu site
            institucional.
          </p>
        </motion.div>

        <div className="privacy-list">
          {privacyItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="privacy-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="privacy-card-header">
                <ShieldCheck size={18} />
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

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
          <h2 className="cta-title">Quer estruturar aquisição, marketing e comercial?</h2>
          <p className="cta-subtitle">
            Fale com a D&apos;Leads para entender como organizar mídia paga, automação,
            processo e acompanhamento de performance no seu negócio.
          </p>
          <div className="cta-buttons">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                COMPANY.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <a href={`mailto:${COMPANY.email}`} className="btn btn-secondary btn-lg">
              <Mail size={20} />
              Enviar e-mail
            </a>
          </div>
          <p className="cta-note">
            Atendimento institucional • Resposta comercial • Operação baseada em performance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#topo" className="logo" aria-label="Ir para o topo">
              <img className="logo-image" src={logoTransparente} alt="Logo D'Leads" />
            </a>
            <p className="footer-description">
              Operação de marketing, mídia paga, automação e crescimento comercial para
              empresas que precisam de estrutura, performance e leitura clara de funil.
            </p>
            <div className="footer-legal">
              <p>{COMPANY.name}</p>
              <p>CNPJ: {COMPANY.cnpj}</p>
              <p>{COMPANY.city}</p>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </div>
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
              <h4>Compliance</h4>
              <a href="#about-us">About Us</a>
              <a href="#privacy-policy">Privacy Policy</a>
              <a href="#business-info">Contact / Address</a>
            </div>
            <div className="footer-column">
              <h4>Business Address</h4>
              <p className="footer-address">{COMPANY.address}</p>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                  COMPANY.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp comercial
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 {COMPANY.name}. Todos os direitos reservados. Informações institucionais,
            endereço comercial e política de privacidade disponíveis nesta página.
          </p>
        </div>
      </div>
    </footer>
  );
};

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
        <AboutUs />
        <BusinessInfo />
        <PrivacyPolicy />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
