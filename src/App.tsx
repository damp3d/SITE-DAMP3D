import { motion, useScroll } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Menu,
  MessageCircle,
  QrCode,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Store,
  X,
} from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';
import type { Key } from 'react';
import logoMarkImage from './assets/logo/logo-full.jpg';
import logoWordmarkImage from './assets/logo/logo-icon.png';
import chaveiroNfcImage from './assets/produtos/CHAVEIRO NFC.png';
import displayCompactImage from './assets/produtos/DISPLAY COMPACT.png';
import displayPixImage from './assets/produtos/DISPLAY PIX.png';
import displayPremiumMaxImage from './assets/produtos/DISPLAY PREMIUM MAX.png';
import displayPremiumImage from './assets/produtos/DISPLAY PREMIUM.png';

const products = [
  {
    title: 'Display Pix',
    subtitle: 'Pagamento e conversão imediata',
    description: 'Ideal para balcão, caixa ou atendimento rápido, com acesso claro e profissional.',
    image: displayPixImage,
    size: '100 x 60 x 30 mm',
    theme: 'from-[#eef2ff] via-[#6d7fff] to-[#243dff]',
  },
  {
    title: 'Display Premium',
    subtitle: 'Mais presença para a sua marca',
    description: 'Destaca links, redes sociais, menu, avaliações e campanhas no ponto de contato.',
    image: displayPremiumImage,
    size: '100 x 60 x 75 mm',
    theme: 'from-[#f4f6ff] via-[#bcc7ff] to-[#111d4f]',
  },
  {
    title: 'Display Compact',
    subtitle: 'Formato enxuto e eficiente',
    description: 'Perfeito para mesas, recepções e espaços menores, onde cada centímetro conta.',
    image: displayCompactImage,
    size: '85 x 47 x 55 mm',
    theme: 'from-[#eff4ff] via-[#95a8ff] to-[#3552ef]',
  },
  {
    title: 'Chaveiro NFC',
    subtitle: 'Portátil e memorável',
    description: 'Leve portfólio, catálogo ou contato para reuniões, visitas e networking.',
    image: chaveiroNfcImage,
    size: '40 x 43 x 4.6 mm',
    theme: 'from-[#f5f7fb] via-[#c1cbe7] to-[#26324f]',
  },
  {
    title: 'Display Premium Max',
    subtitle: 'Maior impacto visual',
    description: 'Formato ampliado para destacar a marca e conduzir o cliente com mais clareza.',
    image: displayPremiumMaxImage,
    size: '150 x 60 x 120 mm',
    theme: 'from-[#eef3ff] via-[#7f93ff] to-[#162575]',
  },
];

const highlights = [
  {
    title: 'Toque ou leitura em segundos',
    text: 'O cliente aproxima o celular ou escaneia o QR code e entra direto no canal certo.',
    icon: ScanLine,
  },
  {
    title: 'Tudo centralizado em um link',
    text: 'WhatsApp, Instagram, cardápio, portfólio, reservas ou catálogo em um único fluxo.',
    icon: QrCode,
  },
  {
    title: 'Atualização simples para sua equipe',
    text: 'A estrutura nasce pronta para crescer com sua operação, sem atrito no uso diário.',
    icon: Smartphone,
  },
];

const useCases = [
  'Restaurantes e cafeterias com cardápio digital',
  'Lojas com WhatsApp, Instagram e avaliações',
  'Profissionais com portfólio, contato e proposta',
  'Eventos, hotéis e recepções com acessos rápidos',
];

const benefits = [
  'Experiência moderna para o cliente',
  'Mais cliques nos canais que importam',
  'Menos fricção entre interesse e ação',
  'Presença física com linguagem digital premium',
];

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  key?: Key;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['#como-funciona', 'Como funciona'],
    ['#produtos', 'Produtos'],
    ['#aplicacoes', 'Aplicações'],
    ['#contato', 'Contato'],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f3f1ec]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_14px_36px_rgba(24,28,42,0.08)]">
            <img src={logoMarkImage} alt="Símbolo DAMP3D" className="h-full w-full object-cover" />
          </div>
          <div>
            <img src={logoWordmarkImage} alt="DAMP3D" className="h-7 w-auto object-contain sm:h-8" />
            <div className="mt-1 hidden text-[10px] uppercase tracking-[0.32em] text-slate-500 sm:block">
              Conexão físico + digital
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
              {label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-[#2f49ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(47,73,255,0.28)] transition-transform hover:-translate-y-0.5"
          >
            Solicitar projeto
          </a>
        </nav>

        <button
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white text-slate-900 md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-black/5 bg-[#f3f1ec] px-4 py-5 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-black/8 bg-white px-4 py-3 text-sm font-medium text-slate-700"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

function HeroVisual() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <div className="relative mx-auto w-full max-w-[35rem]">
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#3550ff]/24 blur-3xl" />

      <motion.div
        key={activeProduct.title}
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-[2.7rem] border border-white/8 bg-[#050505] px-6 pb-0 pt-6 text-white shadow-[0_35px_90px_rgba(0,0,0,0.24)] sm:px-8 sm:pt-8"
      >
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="pointer-events-none absolute right-[-10%] top-[12%] h-72 w-72 rounded-full bg-[#3550ff]/30 blur-3xl" />
        <div className="pointer-events-none absolute left-[10%] top-[20%] h-24 w-24 rounded-full border border-white/8" />
        <div className="pointer-events-none absolute left-[16%] top-[26%] h-24 w-24 rounded-full border border-white/8" />

        <div className="relative">
          <div className="text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">Coleção DAMP3D</div>
            <div className="mt-3 text-[1.95rem] font-display font-semibold tracking-[-0.04em] text-white sm:text-[2.2rem]">
              Produtos em destaque
            </div>
          </div>

          <div className="mt-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7f92ff]">
            {activeProduct.subtitle}
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[2.5rem]">
            {activeProduct.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/68 sm:text-[1.02rem]">
            {activeProduct.description}
          </p>
        </div>

        <div className="relative mx-[-1.5rem] mt-10 flex justify-center sm:mx-[-2rem] sm:mt-12">
          <div className="pointer-events-none absolute inset-x-[14%] bottom-[7%] h-20 rounded-full bg-[radial-gradient(circle,rgba(53,80,255,0.3),transparent_70%)] blur-2xl" />
          <img
            src={activeProduct.image}
            alt={activeProduct.title}
            className="relative block h-auto max-h-[32rem] w-full rounded-[2rem] object-cover object-center"
          />
        </div>
      </motion.div>
    </div>
  );
}

function ProductCarousel() {
  const visibleCount = 3;
  const [startIndex, setStartIndex] = useState(visibleCount);
  const [stepWidth, setStepWidth] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const loopedProducts = [
    ...products.slice(-visibleCount),
    ...products,
    ...products.slice(0, visibleCount),
  ];

  useEffect(() => {
    const updateStepWidth = () => {
      const track = trackRef.current;
      const firstCard = track?.firstElementChild as HTMLDivElement | null;

      if (!track || !firstCard) {
        return;
      }

      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap || '0');
      setStepWidth(firstCard.offsetWidth + gap);
    };

    updateStepWidth();
    window.addEventListener('resize', updateStepWidth);

    return () => window.removeEventListener('resize', updateStepWidth);
  }, []);

  useEffect(() => {
    if (!transitionEnabled) {
      const frame = window.requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });

      return () => window.cancelAnimationFrame(frame);
    }
  }, [transitionEnabled]);

  return (
    <div className="relative mt-12 px-12">
      <button
        type="button"
        onClick={() => setStartIndex((current) => current - 1)}
        className="absolute left-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_12px_30px_rgba(24,28,42,0.06)] transition-all hover:-translate-y-[52%]"
        aria-label="Ver produtos anteriores"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        type="button"
        onClick={() => setStartIndex((current) => current + 1)}
        className="absolute right-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#2f49ff] text-white shadow-[0_14px_30px_rgba(47,73,255,0.24)] transition-all hover:-translate-y-[52%]"
        aria-label="Ver próximos produtos"
      >
        <ChevronRight size={18} />
      </button>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          onTransitionEnd={() => {
            if (startIndex < visibleCount) {
              setTransitionEnabled(false);
              setStartIndex(startIndex + products.length);
              return;
            }

            if (startIndex >= products.length + visibleCount) {
              setTransitionEnabled(false);
              setStartIndex(startIndex - products.length);
            }
          }}
          className={`flex gap-6 ${transitionEnabled ? 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]' : ''}`}
          style={{ transform: `translateX(-${startIndex * stepWidth}px)` }}
        >
          {loopedProducts.map((product, index) => (
            <div
              key={`${product.title}-${index}`}
              className="w-full shrink-0 overflow-hidden rounded-[2rem] border border-white/70 bg-[#fbfaf7] shadow-[0_24px_70px_rgba(24,28,42,0.07)] lg:basis-[calc((100%-3rem)/3)]"
            >
              <div className="relative h-44 overflow-hidden sm:h-56 lg:h-72">
                <img
                  src={product.image}
                  alt={product.title}
                  className="block h-full w-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="inline-flex rounded-full bg-[#edf1ff] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2440d8]">
                  {product.size}
                </div>
                <h3 className="mt-4 text-[1.55rem] font-semibold leading-tight text-slate-950 sm:text-[1.7rem]">{product.title}</h3>
                <div className="mt-2 text-sm font-medium text-[#2f49ff]">{product.subtitle}</div>
                <p className="mt-4 text-sm leading-6 text-slate-600 sm:leading-7">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ebe9e4] text-slate-900">
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
        className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-gradient-to-r from-[#2135c8] via-[#4561ff] to-[#0d1638]"
      />

      <Header />

      <main className="pb-10">
        <section className="px-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/60 bg-[#fbfaf7] px-6 py-8 shadow-[0_30px_80px_rgba(24,28,42,0.08)] sm:px-8 lg:px-14 lg:py-12">
            <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
              <FadeIn>
                <h1 className="max-w-4xl font-display text-5xl leading-[0.92] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[5.4rem]">
                  Transforme cada ponto físico em uma experiência digital elegante.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500 sm:text-[1.15rem]">
                  A DAMP3D cria displays e acessos inteligentes que encurtam o caminho entre interesse, contato e conversão. Seu cliente toca, escaneia e chega ao destino certo em segundos.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f49ff] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(47,73,255,0.28)] transition-transform hover:-translate-y-0.5"
                  >
                    Solicitar projeto
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#produtos"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-900"
                  >
                    Ver formatos
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.1} className="lg:-mt-3">
                <HeroVisual />
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#050505] px-6 py-14 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] sm:px-8 lg:px-12 lg:py-16">
            <FadeIn className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                <BadgeCheck size={14} className="text-[#6f82ff]" />
                Como funciona
              </div>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
                Mais impacto visual. Menos passos entre o cliente e a ação.
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeIn
                    key={item.title}
                    delay={index * 0.08}
                    className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.04] p-7"
                  >
                    <div className="absolute inset-x-10 top-0 h-28 rounded-full border border-white/6" />
                    <div className="absolute inset-x-16 top-6 h-28 rounded-full border border-white/6" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[#2f49ff] text-white shadow-[0_18px_36px_rgba(47,73,255,0.35)]">
                      <Icon size={24} />
                    </div>
                    <h3 className="relative mt-8 text-2xl font-semibold">{item.title}</h3>
                    <p className="relative mt-4 text-sm leading-7 text-white/68">{item.text}</p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <section id="produtos" className="px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#2f49ff]">Linha de produtos</div>
                <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
                  Uma coleção pensada para valorizar a sua marca no ambiente real.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-slate-500">
                O formato muda conforme o contexto do seu negócio, mas a percepção continua a mesma: tecnologia bem apresentada, acesso instantâneo e uma experiência mais memorável.
              </p>
            </FadeIn>

            <ProductCarousel />
          </div>
        </section>

        <section id="aplicacoes" className="px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeIn className="overflow-hidden rounded-[2.4rem] border border-white/60 bg-[#fbfaf7] p-8 shadow-[0_24px_70px_rgba(24,28,42,0.07)] sm:p-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[#edf1ff] text-[#2f49ff]">
                <Store size={24} />
              </div>
              <h3 className="mt-8 font-display text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-[2.2rem]">
                Onde a DAMP3D gera mais valor no dia a dia
              </h3>
              <div className="mt-8 grid gap-3">
                {useCases.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[1.4rem] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
                    <Check size={16} className="text-[#2f49ff]" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="overflow-hidden rounded-[2.4rem] bg-[#101323] p-8 text-white shadow-[0_24px_80px_rgba(16,19,35,0.22)] sm:p-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-white/8 text-[#8ea0ff]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="mt-8 font-display text-3xl leading-tight tracking-[-0.04em] sm:text-[2.2rem]">
                Benefícios que o cliente percebe e a sua marca sustenta
              </h3>
              <div className="mt-8 grid gap-3">
                {benefits.map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/74">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-[#2f49ff] p-5 shadow-[0_20px_40px_rgba(47,73,255,0.22)]">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">Entrega percebida</div>
                <div className="mt-3 text-lg font-semibold">Design físico + acesso inteligente + jornada mais curta para converter.</div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="contato" className="px-4 pb-6 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <div className="mx-auto max-w-7xl rounded-[2.6rem] border border-white/60 bg-[#fbfaf7] p-8 shadow-[0_30px_80px_rgba(24,28,42,0.08)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                  <MessageCircle size={14} className="text-[#2f49ff]" />
                  Fale com a DAMP3D
                </div>
                <h2 className="mt-7 max-w-3xl font-display text-4xl leading-tight tracking-[-0.05em] text-slate-950 sm:text-5xl">
                  Se o produto precisa parecer premium, o ponto de contato também precisa.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                  Podemos estruturar a peça ideal, definir o destino digital e desenhar uma apresentação mais forte para o seu cliente interagir sem dúvida e sem atrito.
                </p>
              </FadeIn>

              <FadeIn delay={0.1} className="grid gap-4">
                <a href="#" className="rounded-[1.6rem] border border-slate-200 bg-white p-5 transition-transform hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-950">Projeto personalizado</div>
                      <div className="mt-2 text-sm leading-6 text-slate-500">
                        Definimos formato, destino digital e melhor uso para o seu ambiente.
                      </div>
                    </div>
                    <ArrowRight size={18} className="mt-1 text-slate-400" />
                  </div>
                </a>
                <a href="#" className="rounded-[1.6rem] border border-slate-200 bg-white p-5 transition-transform hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-950">Implementação guiada</div>
                      <div className="mt-2 text-sm leading-6 text-slate-500">
                        Entregamos a experiência pronta para uso, com orientação clara para sua equipe.
                      </div>
                    </div>
                    <ArrowRight size={18} className="mt-1 text-slate-400" />
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="px-4 pb-6 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <a
                href="https://wa.me/5512991033533"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-start justify-between gap-4 rounded-[2.2rem] border border-[#d8defa] bg-white p-4 shadow-[0_18px_50px_rgba(24,28,42,0.05)] transition-transform hover:-translate-y-0.5 sm:flex-row sm:items-center sm:p-5"
              >
                <div className="min-w-0 rounded-[1.5rem] bg-[#f7f8ff] px-5 py-4 sm:flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3951f3]">
                    Fale conosco
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Atendimento rápido pelo WhatsApp para tirar dúvidas e solicitar seu projeto.
                  </div>
                </div>
                <div className="inline-flex shrink-0 items-center justify-center rounded-[1.3rem] bg-[#2f49ff] px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(47,73,255,0.24)]">
                  Abrir WhatsApp
                </div>
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/60 bg-[#f4f2ee] px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.3rem] border border-black/5 bg-white shadow-[0_12px_28px_rgba(24,28,42,0.06)]">
                  <img src={logoMarkImage} alt="Símbolo DAMP3D" className="h-full w-full object-cover" />
                </div>
                <div>
                  <img src={logoWordmarkImage} alt="DAMP3D" className="h-9 w-auto object-contain" />
                  <div className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Soluções de interatividade que conectam o objeto físico ao destino digital com mais valor percebido.
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400">
                  atendimento@damp3d.com.br
                </div>
                <a href="#contato" className="inline-flex items-center justify-center rounded-full bg-[#2f49ff] px-6 py-3 text-sm font-semibold text-white">
                  Iniciar contato
                </a>
              </div>
            </div>

            <div className="grid gap-8 text-sm text-slate-500 sm:grid-cols-3">
              <div>
                <div className="font-semibold text-slate-950">Produto</div>
                <div className="mt-4 space-y-3">
                  <a href="#produtos" className="block">Displays</a>
                  <a href="#produtos" className="block">Chaveiros NFC</a>
                  <a href="#como-funciona" className="block">Como funciona</a>
                </div>
              </div>
              <div>
                <div className="font-semibold text-slate-950">Aplicações</div>
                <div className="mt-4 space-y-3">
                  <a href="#aplicacoes" className="block">Restaurantes</a>
                  <a href="#aplicacoes" className="block">Lojas</a>
                  <a href="#aplicacoes" className="block">Eventos</a>
                </div>
              </div>
              <div>
                <div className="font-semibold text-slate-950">Social</div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:text-slate-950"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
