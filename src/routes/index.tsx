import { createFileRoute } from "@tanstack/react-router";
import {
  Mail, Linkedin, Github, Download, ArrowRight, Sparkles, Phone,
  Shield, Users, MapPin, Bot, Globe, Star, BookOpen, Heart, Stethoscope,
  Brain, Code2, Layers, Palette, Rocket, HeartHandshake,
} from "lucide-react";
// Using the public directory for static assets

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ravindra — Builder, Storyteller, Future Founder" },
      { name: "description", content: "Hi Angel — a personal portfolio from Ravindra. Builder of Lantern, learner of AI, storyteller at heart." },
      { property: "og:title", content: "Ravindra — Builder, Storyteller, Future Founder" },
      { property: "og:description", content: "A personal note from Ravindra — building Lantern, exploring AI, writing stories." },
    ],
  }),
  component: Index,
});

function FloatingBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-soft opacity-50 blur-3xl animate-float-slow" />
      <div className="absolute top-40 -right-32 h-[460px] w-[460px] rounded-full opacity-40 blur-3xl animate-float-slower"
           style={{ background: "radial-gradient(circle, #D8B4FE 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full opacity-30 blur-3xl animate-float-slow"
           style={{ background: "radial-gradient(circle, #F5D5E0 0%, transparent 70%)" }} />
    </div>
  );
}

function LineArt() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="lg1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#D8B4FE" />
          <stop offset="100%" stopColor="#F5D5E0" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="140" stroke="url(#lg1)" strokeWidth="1.2" />
      <circle cx="200" cy="200" r="100" stroke="#6B4F71" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="200" cy="200" r="60" stroke="url(#lg1)" strokeWidth="1.2" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="200" cy="120" rx="14" ry="38" fill="url(#lg1)" opacity="0.55"
          transform={`rotate(${a} 200 200)`} />
      ))}
      <circle cx="200" cy="200" r="10" fill="#6B4F71" opacity="0.7" />
    </svg>
  );
}

function LanternArt() {
  return (
    <svg viewBox="0 0 300 360" fill="none" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FBD7A1" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#F5D5E0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D8B4FE" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lant" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#D8B4FE" />
          <stop offset="100%" stopColor="#6B4F71" />
        </linearGradient>
      </defs>
      <circle cx="150" cy="180" r="150" fill="url(#glow)" />
      <line x1="150" y1="20" x2="150" y2="70" stroke="#6B4F71" strokeWidth="1.2" />
      <rect x="115" y="70" width="70" height="12" rx="4" fill="url(#lant)" />
      <path d="M120 82 Q150 70 180 82 L195 230 Q150 250 105 230 Z" fill="url(#lant)" opacity="0.85" />
      <path d="M120 82 Q150 70 180 82 L195 230 Q150 250 105 230 Z" stroke="#6B4F71" strokeWidth="1" fill="none" />
      <line x1="115" y1="120" x2="185" y2="120" stroke="#FFF8F5" strokeOpacity="0.5" />
      <line x1="115" y1="180" x2="185" y2="180" stroke="#FFF8F5" strokeOpacity="0.5" />
      <rect x="120" y="230" width="60" height="18" rx="4" fill="#6B4F71" />
      <path d="M150 248 L150 290 M140 290 L160 290 M145 295 L155 295" stroke="#6B4F71" strokeWidth="1.2" />
      <circle cx="150" cy="160" r="22" fill="#FFF1D6" opacity="0.9" />
    </svg>
  );
}

const features = [
  { icon: Shield, label: "Travel Safety" },
  { icon: HeartHandshake, label: "Trusted Community" },
  { icon: MapPin, label: "Local Support" },
  { icon: Bot, label: "AI Assistance" },
  { icon: Globe, label: "Human Connection" },
  { icon: Star, label: "Trust Systems" },
];

const journey = [
  { icon: "📚", title: "Learned Coding", body: "Where the curiosity began — first lines, first loops." },
  { icon: "⚙️", title: "Built Projects", body: "Turning ideas into real, working things." },
  { icon: "🤖", title: "Discovered AI", body: "A new way to think, build, and imagine." },
  { icon: "🚀", title: "Started Building Products", body: "From features to experiences people actually use." },
  { icon: "🏮", title: "Building Lantern", body: "A travel confidence platform — trust, safety, connection." },
  { icon: "🌍", title: "Future Founder Journey", body: "Learning out loud, one product at a time." },
];

const learning = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Bot, label: "Machine Learning" },
  { icon: Code2, label: "Backend Engineering" },
  { icon: Layers, label: "API Development" },
  { icon: Palette, label: "Product Design" },
  { icon: Sparkles, label: "User Experience" },
  { icon: Rocket, label: "Startup Execution" },
  { icon: HeartHandshake, label: "Community & Trust Systems" },
];

const aboutMe = [
  { emoji: "🏏", label: "Cricket Enthusiast" },
  { emoji: "🎬", label: "Marvel Fan" },
  { emoji: "🌍", label: "Travel & Culture Curious" },
  { emoji: "📚", label: "Story Writer" },
  { emoji: "🤖", label: "AI Explorer" },
  { emoji: "💡", label: "Startup Builder" },
];

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-plum backdrop-blur">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <FloatingBlobs />
        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-28 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className="animate-fade-up">
            <Eyebrow>A personal note, written in code</Eyebrow>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-plum sm:text-6xl lg:text-7xl">
              Hi Angel <span className="inline-block animate-float-slow">👋</span>
            </h1>
            <p className="mt-5 font-display text-2xl italic text-plum/80 sm:text-3xl">
              Thank you for taking the time to visit.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              I'm Ravindra, a Computer Science graduate who loves learning through building.
              I'm currently exploring Artificial Intelligence, Machine Learning, Backend
              Engineering, Product Design, and Startup Execution — while turning ideas into
              real products that solve meaningful problems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#journey" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:translate-y-[-1px] hover:shadow-lg">
                View My Journey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#connect" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium text-plum backdrop-blur transition hover:bg-white">
                <Mail className="h-4 w-4" /> Get in Touch
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md animate-fade-in">
            <div className="absolute inset-6 rounded-full bg-white/40 backdrop-blur-xl shadow-soft" />
            <div className="relative h-full w-full p-6">
              <LineArt />
            </div>
          </div>
        </div>
      </section>

      {/* CURRENTLY BUILDING — LANTERN */}
      <section id="lantern" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-25" />
        <FloatingBlobs />
        <Section className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto aspect-[5/6] w-full max-w-sm">
              <div className="absolute inset-0 rounded-[2.5rem] bg-white/50 backdrop-blur-xl shadow-soft animate-float-slow" />
              <div className="relative h-full w-full p-6"><LanternArt /></div>
            </div>
            <div>
              <Eyebrow>Currently Building</Eyebrow>
              <h2 className="mt-5 font-display text-5xl text-plum sm:text-6xl">
                <span className="mr-2">🏮</span>Lantern
              </h2>
              <p className="mt-4 font-display text-xl italic text-plum/80 sm:text-2xl">
                Building confidence for travelers through trust, safety, and connection.
              </p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
                <p>
                  Lantern is a travel confidence platform designed to help travelers feel safer,
                  more connected, and more supported wherever they go.
                </p>
                <p>
                  The platform enables travelers to stay connected with trusted contacts, access
                  reliable local recommendations, share safety check-ins, and quickly reach
                  support during emergencies.
                </p>
                <p>
                  To validate the problem, I conducted traveler interviews and market research
                  to better understand real-world challenges around trust, safety, communication,
                  and confidence while traveling.
                </p>
                <p>
                  As founder and builder, I'm responsible for product design, user research,
                  AI integration, backend development, strategy, and go-to-market planning.
                </p>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.label}
                   className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/60 p-5 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-soft text-plum transition group-hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-plum">{f.label}</span>
              </div>
            ))}
          </div>

          {/* Vision quote */}
          <div className="mt-16 mx-auto max-w-3xl rounded-[2rem] border border-white/60 bg-white/70 px-8 py-10 text-center shadow-soft backdrop-blur-xl">
            <p className="font-display text-xl italic leading-relaxed text-plum sm:text-2xl">
              A lantern has always helped people find their way in unfamiliar places.
              <br />
              <span className="text-plum/80">
                Lantern exists for the same reason — helping travelers navigate the world
                with greater confidence, trust, and peace of mind.
              </span>
            </p>
          </div>
        </Section>
      </section>

      {/* JOURNEY TIMELINE */}
      <Section id="journey">
        <div className="max-w-2xl">
          <Eyebrow>My Journey</Eyebrow>
          <h2 className="mt-5 font-display text-4xl text-plum sm:text-5xl">From first line of code to building a company.</h2>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-plum/30 to-transparent sm:left-1/2" />
          <ol className="space-y-10">
            {journey.map((j, i) => (
              <li key={j.title} className={`relative grid grid-cols-[3rem_1fr] gap-4 sm:grid-cols-2 sm:gap-12 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}>
                <div className={`flex items-center ${i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                  <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-card backdrop-blur w-full sm:max-w-sm transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="text-3xl">{j.icon}</div>
                    <h3 className="mt-2 font-display text-2xl text-plum">{j.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/75">{j.body}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-6 top-8 -translate-x-1/2 sm:left-0 sm:translate-x-[-50%]">
                    <div className="h-4 w-4 rounded-full bg-gradient-soft shadow-soft ring-4 ring-background" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* WHAT I'M LEARNING */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-20" />
        <Section className="relative">
          <div className="max-w-2xl">
            <Eyebrow>What I'm Learning</Eyebrow>
            <h2 className="mt-5 font-display text-4xl text-plum sm:text-5xl">A study in curiosity.</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {learning.map((l) => (
              <div key={l.label}
                   className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-soft">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-soft opacity-30 blur-2xl transition group-hover:opacity-70" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft text-plum transition group-hover:rotate-6">
                    <l.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-display text-lg text-plum">{l.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* WHY I BUILD */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Why I Build</Eyebrow>
          <h2 className="mt-5 font-display text-4xl text-plum sm:text-5xl">A quiet kind of obsession.</h2>
          <div className="mt-10 space-y-5 font-display text-xl italic leading-relaxed text-plum/90 sm:text-2xl">
            <p>Coding taught me problem solving.</p>
            <p>AI taught me curiosity.</p>
            <p>Building products taught me empathy.</p>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            Today, I'm combining all three while creating products centered around trust,
            safety, and meaningful human experiences. I believe technology should not only
            solve problems but also help people feel more confident, supported, and connected.
          </p>
        </div>
      </Section>

      {/* BEYOND BUILDING */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <FloatingBlobs />
        <Section className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Beyond Building</Eyebrow>
            <h2 className="mt-5 font-display text-4xl text-plum sm:text-5xl">📚 Stories, too.</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
              Technology is one way I express ideas. Storytelling is another. Alongside building
              software, I write stories that explore human emotions, relationships, resilience,
              and the journeys people take through life.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {/* Story 1 */}
            <article className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-soft backdrop-blur-xl transition hover:-translate-y-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
                <img src="/ravindras-bloom/beyond-borders.jpg" alt="Beyond Borders of the Heart — book cover" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/90 drop-shadow">A short story by Ravindra</p>
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl text-plum">❤️ Beyond Borders of the Heart</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                A story exploring human connection, distance, emotions, and the invisible threads
                that bring people together despite the borders between them.
              </p>
            </article>

            {/* Story 2 */}
            <article className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-soft backdrop-blur-xl transition hover:-translate-y-1">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-lavender via-blush to-cream p-6 shadow-card flex flex-col items-center justify-center text-center">
                <Stethoscope className="h-10 w-10 text-plum drop-shadow" />
                <p className="mt-5 font-display text-2xl text-plum">Doctors Cure</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-plum/70">A short story</p>
              </div>
              <h3 className="mt-6 font-display text-2xl text-plum">🩺 Doctors Cure</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                A story inspired by healthcare, compassion, resilience, and the impact people
                can have on one another during difficult moments.
              </p>
            </article>
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
              The same curiosity that drives me to build products also drives me to write stories.
              Whether through code or storytelling, I'm fascinated by understanding people,
              solving problems, and creating experiences that leave a meaningful impact.
            </p>
            <a href="#connect" className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium text-plum backdrop-blur transition hover:bg-white">
              <BookOpen className="h-4 w-4" /> Interested in reading more? Let's connect.
            </a>
          </div>
        </Section>
      </section>

      {/* INSPIRATION */}
      <Section id="inspiration">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>What Inspired Me</Eyebrow>
          <h2 className="mt-5 font-display text-4xl text-plum sm:text-5xl">She & Soul focuses on people.</h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
            <p>While exploring She & Soul, I noticed something that genuinely resonated with me.</p>
            <p className="font-display text-xl italic text-plum">Many products focus primarily on features.</p>
            <p className="font-display text-xl italic text-plum">She & Soul focuses on people.</p>
            <p>
              Creating trust, support, and meaningful experiences requires more than technology —
              it requires empathy and a deep understanding of human needs.
            </p>
            <p className="font-display text-plum">That philosophy aligns closely with how I think about building products.</p>
          </div>
        </div>
      </Section>

      {/* A FEW THINGS ABOUT ME */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-20" />
        <Section className="relative">
          <div className="max-w-2xl">
            <Eyebrow>A Few Things About Me</Eyebrow>
            <h2 className="mt-5 font-display text-4xl text-plum sm:text-5xl">Off-screen, too.</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutMe.map((a) => (
              <div key={a.label}
                   className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:rotate-[-0.3deg] hover:shadow-soft">
                <span className="text-3xl transition group-hover:scale-125">{a.emoji}</span>
                <span className="font-medium text-plum">{a.label}</span>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* LET'S CONNECT */}
      <section id="connect" className="relative overflow-hidden bg-gradient-hero">
        <FloatingBlobs />
        <Section className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Let's Connect</Eyebrow>
            <h2 className="mt-5 font-display text-4xl text-plum sm:text-5xl">I'd love to hear from you.</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {[
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ravindra-gogineni-034501212", href: "https://www.linkedin.com/in/ravindra-gogineni-034501212" },
              { icon: Github, label: "GitHub", value: "github.com/ravindra-gogineni", href: "https://github.com/ravindra-gogineni" },
              { icon: Mail, label: "Email", value: "ravindra8022@gmail.com", href: "mailto:ravindra8022@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 7993819157", href: "tel:+917993819157" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                 className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/60 p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-soft text-plum transition group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-plum/60">{c.label}</p>
                  <p className="mt-1 truncate text-sm font-medium text-plum">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="https://www.linkedin.com/in/ravindra-gogineni-034501212" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:-translate-y-0.5">
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <a href="https://github.com/ravindra-gogineni" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium text-plum backdrop-blur transition hover:bg-white">
              <Github className="h-4 w-4" /> View GitHub
            </a>
            <a href="mailto:ravindra8022@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium text-plum backdrop-blur transition hover:bg-white">
              <Mail className="h-4 w-4" /> Send Email
            </a>
          </div>
        </Section>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-40" />
        <FloatingBlobs />
        <Section className="relative">
          <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/60 bg-white/70 px-8 py-16 text-center shadow-soft backdrop-blur-xl sm:px-14 sm:py-20">
            <Sparkles className="mx-auto h-7 w-7 text-plum" />
            <blockquote className="mt-6 space-y-5 font-display text-2xl italic leading-relaxed text-plum sm:text-3xl">
              <p>"I don't know everything yet.</p>
              <p>But I genuinely love learning, building, and turning ideas into products that help people.</p>
              <p>Every project teaches me something new.</p>
              <p>Every challenge helps me grow.</p>
              <p>And every conversation opens the door to a new possibility."</p>
            </blockquote>
            <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-plum/70">— Ravindra</p>
          </div>
        </Section>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-cream">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
          <div>
            <p className="font-display text-2xl text-plum">Ravindra</p>
            <p className="mt-1 text-sm text-foreground/60">Builder · Storyteller · Future Founder</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:ravindra8022@gmail.com" className="text-sm text-plum hover:underline">ravindra8022@gmail.com</a>
            <span className="text-plum/30">·</span>
            <a href="https://www.linkedin.com/in/ravindra-gogineni-034501212" target="_blank" rel="noreferrer" className="text-sm text-plum hover:underline">LinkedIn</a>
            <span className="text-plum/30">·</span>
            <a href="https://github.com/ravindra-gogineni" target="_blank" rel="noreferrer" className="text-sm text-plum hover:underline">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
