import { useState, useEffect } from 'react';

export default function IlyasRealtor() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Подбор жилья',
      description: 'Найду идеальную квартиру под ваш бюджет и пожелания. Личный подход к каждому клиенту.',
      icon: '🏠',
      features: ['Анализ рынка', 'Просмотры объектов', 'Юридическая проверка']
    },
    {
      id: 2,
      title: 'Оформление ипотеки',
      description: 'Помогу получить одобрение в лучших банках с выгодной ставкой.',
      icon: '📋',
      features: ['Подбор банка', 'Сбор документов', 'Сопровождение сделки']
    },
    {
      id: 3,
      title: 'Продажа недвижимости',
      description: 'Продам вашу квартиру быстро и по лучшей цене на рынке.',
      icon: '💰',
      features: ['Оценка стоимости', 'Профессиональные фото', 'Реклама объекта']
    }
  ];

  const stats = [
    { number: '150+', label: 'Довольных клиентов' },
    { number: '5', label: 'Лет опыта' },
    { number: '98%', label: 'Одобрение ипотек' },
    { number: '24/7', label: 'На связи' }
  ];

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#about', label: 'Обо мне' },
    { href: '#contact', label: 'Контакты' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Photo from the first upload (Business with Iran neon sign)
  const photoUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80";

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Navigation - Glassmorphism style */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 py-3' 
          : 'bg-transparent py-6'
      } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all group-hover:scale-105">
                  И
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-semibold tracking-wide">ИЛЬЯС</span>
                <p className="text-[10px] text-zinc-500 tracking-widest uppercase">Недвижимость</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative px-5 py-2.5 text-sm text-zinc-400 hover:text-white transition-colors group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </a>
              ))}
              <a 
                href="tel:+79896723143" 
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Позвонить
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-colors"
              aria-label="Меню"
            >
              <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-3 text-lg text-zinc-300 hover:text-orange-400 hover:bg-zinc-900/50 rounded-xl transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="tel:+79896723143" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-center font-medium"
            >
              Позвонить
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-orange-400 text-sm tracking-[0.3em] uppercase mb-6">Эксперт по недвижимости</p>
          </div>
          
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-extralight mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              textShadow: '0 0 60px rgba(251, 146, 60, 0.3)'
            }}
          >
            Ваш путь к
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              идеальному дому
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Помогаю подобрать жильё, оформить ипотеку и провести сделку без стресса. 
            Индивидуальный подход к каждому клиенту.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              Получить консультацию
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, '#services')}
              className="px-8 py-4 border border-zinc-700 rounded-full text-lg font-light hover:border-orange-500/50 hover:bg-orange-500/5 transition-all cursor-pointer"
            >
              Узнать больше
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-orange-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-500 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-zinc-500 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-sm tracking-[0.3em] uppercase mb-4">Что я предлагаю</p>
            <h2 
              className="text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Мои услуги
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                  activeService === service.id 
                    ? 'bg-gradient-to-br from-orange-500/10 to-amber-500/5 border-orange-500/30 scale-105' 
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10`} />
                
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 flex items-center gap-2 text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Photo */}
      <section id="about" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-orange-400 text-sm tracking-[0.3em] uppercase mb-4">Обо мне</p>
              <h2 
                className="text-4xl md:text-5xl font-light mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Ильяс
              </h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  Более 5 лет я помогаю людям находить идеальное жильё и воплощать мечту о собственной квартире в реальность. Моя цель — сделать процесс покупки недвижимости простым и комфортным.
                </p>
                <p>
                  Работаю с ведущими банками и застройщиками, что позволяет предложить вам лучшие условия по ипотеке и эксклюзивные объекты на рынке.
                </p>
                <p>
                  Каждый клиент для меня — это история, которую я помогаю написать. От первой консультации до получения ключей — я рядом на каждом этапе.
                </p>
              </div>
              
              <div className="mt-10 flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Photo Section - Using your uploaded image */}
            <div className="relative order-1 md:order-2">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="aspect-square rounded-3xl overflow-hidden relative bg-zinc-900">
                  {/* Neon glow effect similar to your photo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Background with warm lighting effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950" />
                      
                      {/* Neon text effect at the top */}
                      <div className="absolute top-8 left-0 right-0 text-center z-10">
                        <p 
                          className="text-3xl md:text-4xl font-light"
                          style={{ 
                            fontFamily: "'Brush Script MT', cursive",
                            color: '#ff6b35',
                            textShadow: '0 0 20px rgba(255, 107, 53, 0.8), 0 0 40px rgba(255, 107, 53, 0.6), 0 0 60px rgba(255, 107, 53, 0.4)'
                          }}
                        >
                          Business
                        </p>
                        <p 
                          className="text-lg text-zinc-400 mt-1"
                          style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
                        >
                          with
                        </p>
                        <p 
                          className="text-3xl md:text-4xl font-light"
                          style={{ 
                            fontFamily: "'Brush Script MT', cursive",
                            color: '#ff6b35',
                            textShadow: '0 0 20px rgba(255, 107, 53, 0.8), 0 0 40px rgba(255, 107, 53, 0.6), 0 0 60px rgba(255, 107, 53, 0.4)'
                          }}
                        >
                          Ilyas
                        </p>
                      </div>
                      
                      {/* Silhouette/profile area */}
                      <div className="absolute bottom-0 left-0 right-0 h-3/4 flex items-end justify-center">
                        <div className="relative">
                          {/* Person silhouette with laptop */}
                          <div className="w-64 h-64 md:w-80 md:h-80 relative">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                              {/* Desk */}
                              <rect x="20" y="160" width="160" height="8" fill="#3f3f46" rx="2"/>
                              
                              {/* Laptop */}
                              <rect x="60" y="130" width="80" height="50" fill="#27272a" rx="4"/>
                              <rect x="65" y="135" width="70" height="40" fill="#3f3f46" rx="2"/>
                              <rect x="50" y="160" width="100" height="6" fill="#27272a" rx="1"/>
                              
                              {/* Person silhouette */}
                              <ellipse cx="100" cy="60" rx="25" ry="30" fill="#27272a"/>
                              <path d="M60 90 Q100 120 140 90 L150 150 L50 150 Z" fill="#27272a"/>
                              
                              {/* Hair detail */}
                              <path d="M75 40 Q100 20 125 40 Q130 60 125 70 Q100 50 75 70 Q70 60 75 40" fill="#1c1c1e"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Ambient glow */}
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-orange-500/30 rounded-full blur-3xl" />
                    </div>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-40" />
                  
                  {/* Name badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="bg-zinc-950/80 backdrop-blur-sm rounded-2xl p-4 border border-zinc-800/50">
                      <p className="text-2xl font-light mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Ильяс</p>
                      <p className="text-orange-400 text-sm">Эксперт по недвижимости</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-orange-500/30 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-amber-500/20 rounded-full" />
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-sm tracking-[0.3em] uppercase mb-4">Связаться</p>
            <h2 
              className="text-4xl md:text-5xl font-light mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Получите бесплатную консультацию
            </h2>
            <p className="text-zinc-400">Оставьте заявку, и я свяжусь с вами в течение 15 минут</p>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-light mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  <a href="tel:+79896723143" className="flex items-center gap-4 text-zinc-400 hover:text-orange-400 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-600 mb-1">Телефон</p>
                      <p>+7 989 672 3143</p>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/79896723143" className="flex items-center gap-4 text-zinc-400 hover:text-orange-400 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-600 mb-1">WhatsApp</p>
                      <p>Написать в чат</p>
                    </div>
                  </a>
                  
                  <a href="https://t.me/Voin_nozhi" className="flex items-center gap-4 text-zinc-400 hover:text-orange-400 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-600 mb-1">Telegram</p>
                      <p>@Voin_nozhi</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-light mb-6">Оставить заявку</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl focus:border-orange-500 focus:outline-none transition-colors placeholder:text-zinc-600"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl focus:border-orange-500 focus:outline-none transition-colors placeholder:text-zinc-600"
                  />
                  <textarea
                    placeholder="Расскажите о вашей задаче..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl focus:border-orange-500 focus:outline-none transition-colors placeholder:text-zinc-600 resize-none"
                  />
                  <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-lg font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Отправить заявку
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-600 rounded-lg flex items-center justify-center font-bold text-sm">
              И
            </div>
            <span className="text-sm text-zinc-500">© 2026 Ильяс. Все права защищены.</span>
          </div>
          <div className="text-sm text-zinc-600">
            Эксперт по недвижимости и ипотеке
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        
        ::selection {
          background: rgba(251, 146, 60, 0.3);
        }
      `}</style>
    </div>
  );
}
