import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Box, Camera, Layers3, Mail, Sparkles, Wand2 } from 'lucide-react';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';

const portfolio = [
  {
    title: 'Green Kitchen',
    type: 'Interior Visualization',
    description: 'A bold mix of deep green cabinetry, brass hardware, and a marble island set against herringbone parquet flooring.',
    image: img1,
    link: 'https://www.behance.net/gallery/249353699/Green-Wood-Kitchen-Design',
  },
  {
    title: 'Night Loft Bedroom',
    type: 'Interior Visualization',
    description: 'A dramatic bedroom with red LED accents, floor-to-ceiling windows, and a moody city skyline — cinematic atmosphere at its finest.',
    image: img2,
    link: 'https://www.behance.net/gallery/248921931/Cinematic-bedroom',
  },
  {
    title: 'Living & Dining Space',
    type: 'Interior Visualization',
    description: 'Neutral palette, a round green dining table, fluted wall panels, and abstract art — quiet sophistication in a modern living space.',
    image: img3,
    link: null,
  },
  {
    title: 'Scandinavian Bedroom',
    type: 'Interior Visualization',
    description: 'Minimalism in warm wood tones, a micro-cement accent wall, and soft natural light — clean, breathing Scandinavian aesthetics.',
    image: img4,
    link: null,
  },
];

const services = [
  {
    icon: Box,
    title: '3D Interior Visualization',
    text: 'Photorealistic interior renders for designers, architects, and private clients.',
  },
  {
    icon: Layers3,
    title: 'Space Planning & Layout',
    text: 'Visualization of floor plans and spatial layouts to communicate design intent before construction begins.',
  },
  {
    icon: Camera,
    title: 'Product Rendering',
    text: 'Scenes for brands, catalogs, websites, presentations, and social media.',
  },
];

const steps = ['Brief', 'Moodboard', 'Modeling', 'Lighting', 'Final Render'];

export default function App() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#171412] selection:bg-[#171412] selection:text-white">
      <section className="relative overflow-hidden px-6 py-8 md:px-12 lg:px-20">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute left-[-12%] top-[-14%] h-96 w-96 rounded-full bg-[#ead8c5] blur-3xl" />
          <div className="absolute bottom-[16%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-[#ded3c4] blur-3xl" />
          <div className="absolute left-[35%] top-[34%] h-72 w-72 rounded-full bg-white blur-3xl" />
        </div>

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#171412]/10 bg-white/65 px-5 py-4 shadow-sm backdrop-blur-xl">
          <div className="text-sm font-semibold uppercase tracking-[0.32em] text-[#171412]/80">Hlyvka Kate</div>
          <div className="hidden items-center gap-8 text-sm text-[#171412]/55 md:flex">
            <a href="#work" className="transition hover:text-[#171412]">Work</a>
            <a href="#services" className="transition hover:text-[#171412]">Services</a>
            <a href="#contact" className="transition hover:text-[#171412]">Contact</a>
          </div>
          <a href="mailto:kate.3dvisualizer@gmail.com" className="rounded-full bg-[#171412] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#3a332d]">
            Letʼs talk
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#171412]/10 bg-white/65 px-4 py-2 text-sm text-[#171412]/65 shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4" /> 3D Visualizer / Interior Design
            </div>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
              Visual stories for spaces before they exist.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#171412]/62 md:text-xl">
              Hlyvka Kate creates aesthetic 3D visualizations of interiors — with a deep focus on light, materials, composition, and the feeling of a space.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#work" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#171412] px-7 py-4 font-medium text-white shadow-lg shadow-[#171412]/10 transition hover:bg-[#3a332d]">
                View portfolio <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-[#171412]/15 bg-white/40 px-7 py-4 font-medium text-[#171412]/80 transition hover:border-[#171412]/30 hover:bg-white/70 hover:text-[#171412]">
                Start a project
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#171412]/10 bg-gradient-to-br from-[#f8f4ee] via-white to-[#d4c8b9] p-4 shadow-2xl shadow-[#6f6253]/20">
              <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-[#efe6db] p-5">
                <div className="absolute inset-5 rounded-[1.25rem] bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),transparent_18%),linear-gradient(135deg,rgba(255,255,255,0.75),rgba(120,95,68,0.08))]" />
                <div className="absolute bottom-10 left-8 right-8 rounded-3xl border border-white/70 bg-white/55 p-5 shadow-xl shadow-[#6f6253]/10 backdrop-blur-xl">
                  <div className="mb-16 h-1.5 w-20 rounded-full bg-[#171412]/65" />
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-[#171412]">Light, material, emotion.</p>
                  <p className="mt-3 text-sm leading-6 text-[#171412]/58">Photorealistic renders with a calm editorial aesthetic.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-3xl border border-[#171412]/10 bg-white/80 p-5 shadow-xl shadow-[#6f6253]/10 backdrop-blur-xl">
              <div className="text-4xl font-semibold">48+</div>
              <div className="mt-1 text-sm text-[#171412]/55">completed renders</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="work" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#171412]/40">Selected work</p>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Portfolio scenes crafted with precision.</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {portfolio.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[2rem] border border-[#171412]/10 bg-white/55 p-3 shadow-sm backdrop-blur-xl"
              >
                <div className="relative aspect-[1.25/1] overflow-hidden rounded-[1.5rem]">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(20,14,8,0.22))]" />
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/60 text-[#171412] shadow-sm backdrop-blur-lg transition group-hover:scale-105 hover:bg-white"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  ) : (
                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/25 text-[#171412]/30 shadow-sm backdrop-blur-lg cursor-not-allowed">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#171412]/38">{item.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#171412]/55">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#171412]/10 bg-white/55 p-6 shadow-sm backdrop-blur-xl md:p-10">
          <div className="mb-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#171412]/40">Services</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">From concept to final render.</h2>
            </div>
            <p className="text-lg leading-8 text-[#171412]/58">Every project is built around a goal: sell the idea, present the space, or create a powerful visual story.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[2rem] border border-[#171412]/10 bg-[#fbf7f0] p-6 shadow-sm">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#171412] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{service.title}</h3>
                  <p className="mt-4 leading-7 text-[#171412]/55">{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#171412]/40">Process</p>
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">A clear workflow for refined results.</h2>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-5 rounded-2xl border border-[#171412]/10 bg-white/55 p-5 shadow-sm backdrop-blur-xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171412] text-sm font-semibold text-white">{index + 1}</span>
                  <span className="text-xl font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-8 pt-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#171412]/10 bg-[#171412] text-white shadow-2xl shadow-[#6f6253]/20">
          <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-14">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#171412]">
                <Wand2 className="h-4 w-4" /> Available for new projects
              </div>
              <h2 className="max-w-3xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">Letʼs create visuals that sell the idea.</h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="mb-8 text-lg leading-8 text-white/62">Reach out if you need a 3D visualization of your interior. A floor plan, references, and a brief description are enough to get started.</p>
              <a href="mailto:kate.3dvisualizer@gmail.com" className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-medium text-[#171412] transition hover:bg-[#f1e7d8]">
                <Mail className="h-5 w-5" /> kate.3dvisualizer@gmail.com <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
        <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-2 py-8 text-sm text-[#171412]/40 md:flex-row">
          <span>© 2026 Hlyvka Kate. 3D Visualization Portfolio.</span>
          <span>Interior · 3D Visualization · Lighting & Materials</span>
        </footer>
      </section>
    </main>
  );
}
