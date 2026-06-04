import { createFileRoute } from "@tanstack/react-router";
import { Skull, Anchor, Compass, Trophy, X, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import shipHero from "@/assets/ship-hero.webp.asset.json";
import step1 from "@/assets/step-1.png.asset.json";
import step2 from "@/assets/step-2.jpg.asset.json";
import step3 from "@/assets/step-3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ship or Die — Ship a startup in 30 days, or get kicked out forever" },
      { name: "description", content: "Join a private crew of builders. Ship an app in 30 days, or get marked overboard." },
      { property: "og:title", content: "Ship or Die" },
      { property: "og:description", content: "Ship an app in 30 days, or get kicked out forever." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Page,
});

const tweets = [
  { name: "danny skelley", handle: "@dannyskelley", text: "I signed up for @jackfriks and @marclou ship or die yesterday and today I made my first dollar and got my first user for ismyideavalid.com #shipordie", date: "May 27, 2026" },
  { name: "Janis Ozolins", handle: "@OzolinsJanis", text: "i have 2 products i want to ship. let's add some more accountability n fun. aye aye captain 🫡", date: "May 26, 2026" },
  { name: "Tonino Catapano", handle: "@tonnoz", text: "Captain Tonnoz reporting aboard 🫡 Accountability as a service: engaged. Looking forward to connect with all the crew 🏴‍☠️", date: "May 31, 2026" },
  { name: "Davis", handle: "@nabutovskis", text: "I'm officially a pirate. Just joined Ship Or Die 🔥🔥", date: "May 26, 2026" },
  { name: "Jaco", handle: "@jacomakes", text: "Let's go CREW!! We're in this together!! We SHIP or DIE", date: "May 26, 2026" },
  { name: "Jesse", handle: "@heyfuturejesse", text: "I've lurked the build in public world for far too long. I'm going to ship a product in 30 days or die trying. Yarrr 🏴‍☠️", date: "May 27, 2026" },
  { name: "katalystkat", handle: "@katalyst_katt", text: "help i'm on a ship and i refuse to die", date: "May 26, 2026" },
  { name: "Jessyka Boatright", handle: "@jessyka_boat", text: "I joined!!!!", date: "May 26, 2026" },
];

const faqs = [
  { q: "What app can I work on?", a: "Anything, as long as it can be shared with a link. SaaS, tool, directory, marketplace, AI wrapper, cursed little experiment. If the crew can click it, it counts." },
  { q: "What if I already have an idea?", a: "Good. Bring it aboard and stop polishing the treasure map. The point is to ship the smallest version people can actually use." },
  { q: "What if I do not have an idea yet?", a: "You will pick one fast. No hiding in the fog for three weeks asking the wind for permission." },
  { q: "Do I need to be a technical founder?", a: "No. You need enough grit to get a link live. Code it, vibe code it, duct-tape it. The sea does not care how the boat floats." },
  { q: "When does the 30-day timer start?", a: "After checkout, you choose the project you are committing to. Once that mission is created, the 30-day timer starts." },
  { q: "What happens if I do not launch in 30 days?", a: "You get marked overboard, lose community access, and become a warning tale for the next batch of pirates who thought they were special." },
  { q: "Can I change my idea after joining?", a: "Yes, early and for a real reason. But once you've signed the oath, you're committed to the idea and the 30-day clock." },
  { q: "Is this a course?", a: "No. Courses let you feel productive while staying hidden. This is a deadline, an exclusive community, and a public launch waiting to judge your excuses." },
  { q: "How much time do I need each week?", a: "Enough to move the ship daily. Some pirates have full-time jobs, kids, chaos, and bad Wi-Fi. The rule is progress, not perfect conditions." },
  { q: "Will people help me?", a: "Aye. You get the crew, feedback, pressure, and visibility. You still have to swing the hammer yourself." },
  { q: "Can I get a refund?", a: "If you genuinely asked this, blink twice and start over." },
];

function Page() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <ProblemBlock />
      <Pitch />
      <Steps />
      <Overboard />
      <Founders />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CrewStrip />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-pirate text-xl">
          <Skull className="size-5 text-primary" />
          <span>Ship or Die</span>
          <span className="hidden text-xs font-mono text-muted-foreground sm:inline">by Marc Lou &amp; Jack Friks</span>
        </a>
        <nav className="flex items-center gap-2 text-sm">
          <a href="#pricing" className="hidden px-3 py-2 text-muted-foreground hover:text-foreground sm:inline">Pricing</a>
          <a href="#pricing" className="rounded-md bg-primary px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground transition hover:opacity-90">Join now</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">scroll to start</p>
      <h1 className="mx-auto mt-6 max-w-4xl font-display text-6xl uppercase leading-[0.95] tracking-tight md:text-8xl">
        <span className="text-parchment">SHIP</span> your app in
        <br />
        <span className="text-parchment">30 days</span>
        <br />
        <span className="font-pirate text-primary normal-case">or DIE</span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
        miss the deadline, get kicked out forever.
      </p>
      <div className="mt-10 flex justify-center">
        <img
          src={shipHero.url}
          alt="A pirate ship sailing through stormy seas"
          className="w-full max-w-3xl rounded-xl border border-border/60 shadow-2xl shadow-black/50"
        />
      </div>
      <div className="mt-10">
        <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/30 transition hover:translate-y-[-2px] hover:shadow-xl">
          <Anchor className="size-4" /> Join the crew
        </a>
      </div>
    </section>
  );
}

function ProblemBlock() {
  return (
    <section className="border-y border-border/40 bg-card/40 px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-4xl uppercase md:text-5xl">0 users. 0 revenue.</p>
        <p className="mt-4 text-muted-foreground">Not because the idea is bad…</p>
        <p className="mt-2 text-lg">…but because nobody can actually use your app yet.</p>
        <div className="mx-auto mt-12 max-w-md rounded-lg border border-border bg-background p-6 text-left">
          <p className="font-mono text-sm text-muted-foreground">"I'm two weeks away."</p>
          <p className="mt-3 font-pirate text-2xl text-primary">You've been two weeks away for four months 💀</p>
        </div>
        <p className="mt-12 text-muted-foreground">Polishing in private isn't progress.</p>
        <p className="mt-2 text-2xl font-semibold">
          You don't need more time. You need a <span className="text-primary underline decoration-wavy">different strategy</span>.
        </p>
      </div>
    </section>
  );
}

function Pitch() {
  return (
    <section className="px-4 py-24 text-center">
      <h2 className="mx-auto max-w-3xl font-pirate text-4xl text-accent md:text-6xl">
        Ship an app every 30 days until one changes your life
      </h2>
    </section>
  );
}

function Steps() {
  const items = [
    {
      n: "01",
      title: "Become a pirate",
      img: step1.url,
      lede: "You are the average of the five people you spend the most time with. Join a private crew of builders who ship, not productivity tourists.",
      bullets: [
        "Join our Discord community of pirates who ship",
        "Hold each other accountable with daily check-ins",
        "Feeling solo? Join the voice channels and cowork with others",
      ],
    },
    {
      n: "02",
      title: "Make small bets",
      img: step2.url,
      lede: "Building a business is scary. Build one feature with a buy button instead. We break down the core of making small bets into a gamified startup roadmap.",
      bullets: [
        "One feature. A buy button. That's all you need to validate",
        "Overthinking? Each step guides you to the next",
        "Finally launch your idea — it's mandatory",
      ],
    },
    {
      n: "03",
      title: "Don't quit",
      img: step3.url,
      lede: "This is the whole game. Ship or Die exists so quitting feels stupid and shipping feels fun. Keep building until you find the startup that changes your life.",
      bullets: [
        "Public mission profiles that keep you accountable",
        "30-day deadlines and trophies that turn shipping into a game",
        "Ship, launch, repeat is your new normal",
      ],
    },
  ];
  return (
    <section className="space-y-32 px-4 py-16">
      {items.map((it, i) => (
        <div key={it.n} className={`mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
          <div className="overflow-hidden rounded-2xl border border-border/60 shadow-xl shadow-black/40">
            <img src={it.img} alt={it.title} className="w-full" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="text-accent">{it.n}</span> · step
            </p>
            <h3 className="mt-3 font-display text-5xl uppercase">{it.title}</h3>
            <p className="mt-4 text-muted-foreground">{it.lede}</p>
            <ul className="mt-6 space-y-3">
              {it.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

function Overboard() {
  const items = [
    "Hall of shame in the public Discord channel",
    "Kicked out of the community",
    "Publicly marked overboard",
    "No refund",
  ];
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-2xl rounded-2xl border-2 border-primary/60 bg-primary/10 p-10 text-center">
        <p className="font-pirate text-3xl text-primary md:text-5xl">Miss the deadline...</p>
        <p className="mt-2 font-display text-2xl uppercase">and you're out</p>
        <ul className="mt-8 space-y-3 text-left">
          {items.map((i) => (
            <li key={i} className="flex items-center gap-3">
              <X className="size-5 shrink-0 text-primary" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section className="border-y border-border/40 bg-card/40 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Built by people who ship.</p>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {[
            { name: "Marc Lou", initials: "ML", bio: "Marc thought he was Mark Zuckerberg and spent 2 years building ambitious startups nobody wanted: 0 users, $0 revenue. So he changed strategy: build, launch, repeat. He has now launched 30+ startups, including DataFast ($22K MRR) and TrustMRR ($33K MRR)." },
            { name: "jack friks", initials: "JF", bio: "Jack quit McDonald's to learn to code in his mom's basement. His first app Curiosity Quench hit 100,000 downloads, then he shipped Post Bridge (now $35K MRR) and Lovelee Couples (100,000+ downloads)." },
          ].map((f) => (
            <div key={f.name} className="rounded-2xl border border-border bg-background p-6">
              <div className="flex items-center gap-4">
                <div className="grid size-14 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground">{f.initials}</div>
                <h3 className="font-pirate text-3xl">{f.name}</h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-display text-3xl uppercase md:text-4xl">
          <span className="text-accent">242</span> pirates are shipping. Aye!
        </p>
        <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {tweets.map((t) => (
            <div key={t.handle + t.date} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-muted font-mono text-xs">{t.name.slice(0, 2).toUpperCase()}</div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.handle}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed">{t.text}</p>
              <p className="mt-3 text-xs text-muted-foreground">{t.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const bullets = [
    "Private community access",
    "Gamified 30-day startup journey",
    "Public profile with all your apps",
    "No refund. Ship or get kicked out.",
  ];
  return (
    <section id="pricing" className="px-4 py-24">
      <div className="mx-auto max-w-md">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">pricing</p>
        <h2 className="mt-4 text-center font-display text-5xl uppercase">Join the crew.</h2>
        <div className="mt-10 rounded-2xl border-2 border-accent/50 bg-card p-8 shadow-2xl shadow-accent/10">
          <div className="flex items-baseline justify-center gap-3">
            <span className="font-mono text-2xl text-muted-foreground line-through">$299</span>
            <span className="font-display text-6xl text-accent">$269</span>
          </div>
          <p className="mt-1 text-center text-sm text-muted-foreground">one-time payment</p>
          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm">
                <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="mt-8 flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:opacity-90">
            <Trophy className="size-4" /> Join for $269
          </a>
          <div className="mt-6 space-y-2 text-center font-mono text-xs text-muted-foreground">
            <p><span className="text-foreground">$249</span> sold out</p>
            <p><span className="text-foreground">$269</span> — 58 spots left</p>
            <p><span className="text-foreground">$299</span> next 100 users</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-4xl uppercase">Questions before you board?</h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CrewStrip() {
  const crew = ["Jake North", "Pratik Kadam", "Himmy The Third", "Bro", "Harish", "Tunimba", "Niko", "Robert G", "Seb", "RoosterFish", "Guisong Fu", "alepbuilds", "Tristan", "Bartu", "Garm", "Patrick", "JC", "FloofyCode", "nikohbuilds", "Bit", "Rob Rock", "Mikael Vallenet", "Nish", "Jacob Wellinghoff", "Ayoub Moustaid", "Philip", "Nafi", "SK", "dany", "Tonnoz", "Pushpit", "Wade", "jihoon", "Sarthak Shaurya", "Ted Yap", "Umer Farooq", "haze", "Enrique", "Pawel", "Will Bray-Cotton", "Daniel", "Joachim Chauvet", "Stuart Blackler", "Girish Kotte", "Captain Tommy", "Brian", "DJjones", "TravelingTice", "Lazar", "Olivier"];
  return (
    <section className="border-y border-border/40 bg-card/40 px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <div className="flex flex-wrap justify-center gap-8 font-pirate text-2xl">
          <div><span className="text-accent">238</span> <span className="text-muted-foreground text-base font-sans">people shipping startups</span></div>
          <div><span className="text-primary">4</span> <span className="text-muted-foreground text-base font-sans">people thrown overboard</span></div>
        </div>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">view crew page →</p>
        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10">
          {crew.slice(0, 40).map((name) => (
            <div key={name} className="rounded-lg border border-border bg-background/60 px-2 py-3 text-xs">
              <div className="mx-auto grid size-8 place-items-center rounded-full bg-muted font-mono text-[10px]">{name.slice(0,2).toUpperCase()}</div>
              <p className="mt-2 truncate font-medium">{name}</p>
              <p className="text-[10px] text-muted-foreground">0 shipped</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 py-10 text-center font-mono text-xs text-muted-foreground">
      <div className="flex items-center justify-center gap-2">
        <Compass className="size-4" />
        <span>Terms · Privacy · © 2026 JustShipIt Pte. Ltd.</span>
      </div>
    </footer>
  );
}
