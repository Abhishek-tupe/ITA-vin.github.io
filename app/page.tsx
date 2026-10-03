'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu as MenuIcon, X } from 'lucide-react'

const BASE_PATH = '/ITA-vin.github.io'

const menuSections = [
  {
    label: 'From the kitchen',
    title: 'Pasta & classics',
    items: [
      {
        name: 'Spaghetti al pomodoro',
        description: 'San Marzano tomato, basil, aged parmigiano',
        price: '24',
        image: `${BASE_PATH}/spaghetti.png`,
      },
      {
        name: 'Lasagna della nonna',
        description: 'Slow ragu, béchamel, fresh pasta sheets',
        price: '29',
        image: `${BASE_PATH}/lasagna.png`,
      },
      {
        name: 'Tagliatelle al tartufo',
        description: 'Hand-cut pasta, black truffle, brown butter',
        price: '36',
        image: `${BASE_PATH}/tagliatelle.png`,
      },
      {
        name: 'Piccata di pollo',
        description: 'Lemon, capers, parsley, silky pan jus',
        price: '31',
        image: `${BASE_PATH}/piccata.png`,
      },
      {
        name: 'Lobster linguine',
        description: 'Maine lobster, heirloom tomato, chili',
        price: '42',
        image: `${BASE_PATH}/lobster.png`,
      },
      {
        name: 'Gamberi alla griglia',
        description: 'Wild shrimp, garlic, lemon, olive oil',
        price: '34',
        image: `${BASE_PATH}/shrimp.png`,
      },
    ],
  },
  {
    label: 'From the cellar',
    title: 'Wine & champagne',
    items: [
      {
        name: 'Rosso della casa',
        description: 'A bright, easy-drinking Italian red · glass',
        price: '12',
        image: `${BASE_PATH}/red-wine.png`,
      },
      {
        name: 'Chianti Classico',
        description: 'Sangiovese, Tuscan hills · glass',
        price: '13',
        image: `${BASE_PATH}/red-wine.png`,
      },
      {
        name: 'Barolo DOCG',
        description: 'Nebbiolo, Piedmont · glass',
        price: '18',
        image: `${BASE_PATH}/red-wine.png`,
      },
      {
        name: 'Amarone della Valpolicella',
        description: 'Corvina, Veneto · glass',
        price: '21',
        image: `${BASE_PATH}/red-wine.png`,
      },
      {
        name: 'Brunello di Montalcino',
        description: 'Sangiovese Grosso, Tuscany · glass',
        price: '19',
        image: `${BASE_PATH}/red-wine.png`,
      },
      {
        name: 'Tenuta San Guido',
        description: 'Bolgheri blend, Tuscany · glass',
        price: '30',
        image: `${BASE_PATH}/red-wine.png`,
      },
      {
        name: 'Sassicaia 50 Year',
        description: 'A collector’s pour, Tuscany · glass',
        price: '50',
        image: `${BASE_PATH}/red-wine.png`,
      },
      {
        name: 'Franciacorta Brut',
        description: 'Lombardy · traditional method',
        price: '18',
        image: `${BASE_PATH}/champagne.png`,
      },
      {
        name: 'Rosé Champagne',
        description: 'Reims · bright red fruit, fine bubbles',
        price: '24',
        image: `${BASE_PATH}/champagne.png`,
      },
    ],
  },
]

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#242321]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <a
            href="#top"
            className="font-serif text-2xl tracking-[-0.04em] text-[#713d35]"
          >
            Lume
          </a>

          <nav className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.2em] md:flex">
            <a
              className="transition-colors hover:text-[#9a5a4e]"
              href="#story"
            >
              Our story
            </a>

            <a
              className="transition-colors hover:text-[#9a5a4e]"
              href="#menu"
            >
              Menu
            </a>

            <a
              className="transition-colors hover:text-[#9a5a4e]"
              href="#order"
            >
              Order
            </a>

            <a
              className="transition-colors hover:text-[#9a5a4e]"
              href="#visit"
            >
              Visit us
            </a>
          </nav>

          <a
            href="#visit"
            className="hidden border border-[#713d35] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#713d35] transition hover:bg-[#713d35] hover:text-white sm:block"
          >
            Reserve a table
          </a>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-5 bg-[#f8f7f3] px-6 pb-7 text-sm uppercase tracking-[0.18em] md:hidden">
            <a href="#story" onClick={() => setOpen(false)}>
              Our story
            </a>

            <a href="#menu" onClick={() => setOpen(false)}>
              Menu
            </a>

            <a href="#visit" onClick={() => setOpen(false)}>
              Visit us
            </a>
          </nav>
        )}
      </header>

      <section
        id="top"
        className="relative overflow-hidden border-b border-[#d9d3c9] pt-32 lg:pt-40"
      >
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 pb-16 lg:grid-cols-[1fr_1.08fr] lg:px-10 lg:pb-24">
          <div className="max-w-xl">
            <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.28em] text-[#9a5a4e]">
              Italian kitchen · since 1998
            </p>

            <h1 className="font-serif text-[clamp(4.5rem,12vw,9.5rem)] leading-[0.8] tracking-[-0.08em] text-[#713d35]">
              A table
              <br />
              <em className="font-normal text-[#242321]">with soul.</em>
            </h1>

            <p className="mt-10 max-w-sm text-base leading-7 text-[#716d65]">
              An intimate Italian restaurant where time slows down, wine is
              poured generously, and every plate tells a story.
            </p>

            <a
              href="#menu"
              className="mt-9 inline-flex items-center gap-3 border-b border-[#713d35] pb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#713d35]"
            >
              Explore the menu
              <ArrowRight data-icon="inline-end" />
            </a>
          </div>

          <div className="relative ml-auto w-full max-w-xl">
            <div className="absolute -bottom-5 -left-5 size-28 rounded-full border border-[#b98f72]/50" />

            <img
              src={`${BASE_PATH}/italian-table.png`}
              alt="Handmade pasta and red wine on an Italian table"
              className="relative aspect-[1.08/1] w-full object-cover"
            />

            <p className="absolute -bottom-9 right-3 font-serif text-sm italic text-[#9a5a4e]">
              Mangia bene, vivi bene.
            </p>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 pb-5 text-[10px] uppercase tracking-[0.24em] text-[#8d887f] lg:px-10">
          <span className="h-px w-8 bg-[#b98f72]" />
          Via della Rosa, New York
        </div>
      </section>

      <section
        id="story"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1fr] lg:px-10 lg:py-36"
      >
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9a5a4e]">
            The Lume way
          </p>

          <h2 className="mt-5 max-w-sm font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#713d35] lg:text-6xl">
            Made slowly.
            <br />
            <em className="font-normal text-[#242321]">Shared fully.</em>
          </h2>
        </div>

        <div className="max-w-lg lg:pt-10">
          <p className="text-2xl leading-snug text-[#4d4943]">
            We believe the best meals are never rushed. Our menu follows the
            seasons, our pasta is made by hand, and our doors are always open
            to one more at the table.
          </p>

          <p className="mt-8 text-sm leading-7 text-[#716d65]">
            Lume means light. It is the glow of a late afternoon in the piazza,
            the candle between friends, the spark in a good bottle of wine.
            Come find your light.
          </p>
        </div>
      </section>

      <section
        id="menu"
        className="border-y border-[#d9d3c9] bg-[#eeece6]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9a5a4e]">
                A taste of Lume
              </p>

              <h2 className="mt-4 font-serif text-6xl tracking-[-0.06em] text-[#713d35]">
                The menu
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#716d65]">
              Our menu changes with the market. A few favorites, always made
              with intention.
            </p>
          </div>

          <div className="grid gap-24 lg:grid-cols-2 lg:gap-16">
            {menuSections.map((section) => (
              <div key={section.title}>
                <div className="mb-8 flex items-end justify-between border-b border-[#bdb7ad] pb-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#9a5a4e]">
                      {section.label}
                    </p>

                    <h3 className="mt-2 font-serif text-4xl tracking-[-0.04em]">
                      {section.title}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="font-serif text-2xl text-[#b98f72]"
                  >
                    ✦
                  </span>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <article
                      key={item.name}
                      className="group overflow-hidden bg-[#f8f7f3]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="aspect-[1.2/1] w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="flex items-start justify-between gap-4 p-5">
                        <div>
                          <h4 className="font-serif text-xl group-hover:text-[#9a5a4e]">
                            {item.name}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-[#817b72]">
                            {item.description}
                          </p>
                        </div>

                        <span className="shrink-0 font-serif text-lg text-[#713d35]">
                          ${item.price}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="order"
        className="border-y border-[#d9d3c9] bg-[#713d35] text-[#f8f7f3]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_0.8fr] lg:px-10 lg:py-32">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#d9b19c]">
              Lume at home
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-6xl leading-[0.9] tracking-[-0.06em] lg:text-8xl">
              Place your
              <br />
              <em className="font-normal text-[#f4ded0]">order.</em>
            </h2>

            <p className="mt-8 max-w-md text-base leading-7 text-[#e8d8ce]">
              Bring a little light to your table. Order your Lume favorites
              for pickup or local delivery.
            </p>

            <a
              href="tel:+12125550198"
              className="mt-10 inline-flex items-center gap-3 bg-[#f8f7f3] px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#713d35] transition hover:bg-[#f4ded0]"
            >
              Call to order
              <ArrowRight data-icon="inline-end" />
            </a>
          </div>

          <div className="grid gap-4 self-end">
            <div className="border border-[#a97161] p-6">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#d9b19c]">
                Pickup
              </p>

              <p className="font-serif text-2xl">Ready in 25 minutes</p>

              <p className="mt-2 text-sm leading-6 text-[#e8d8ce]">
                18 Via della Rosa · Tue–Sat, 5–10pm
              </p>
            </div>

            <div className="border border-[#a97161] p-6">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#d9b19c]">
                Delivery
              </p>

              <p className="font-serif text-2xl">Made for your table</p>

              <p className="mt-2 text-sm leading-6 text-[#e8d8ce]">
                Within 5 miles · $5 delivery fee
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="visit"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="grid gap-12 border-b border-[#d9d3c9] pb-24 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9a5a4e]">
              Come as you are
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-6xl leading-[0.9] tracking-[-0.06em] text-[#713d35] lg:text-8xl">
              Your table
              <br />
              <em className="font-normal text-[#242321]">is waiting.</em>
            </h2>

            <a
              href="mailto:hello@lume-nyc.com"
              className="mt-10 inline-flex items-center gap-3 bg-[#713d35] px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#9a5a4e]"
            >
              Make a reservation
              <ArrowRight data-icon="inline-end" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 self-end text-sm leading-6 text-[#716d65]">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#9a5a4e]">
                Find us
              </p>

              <p>
                18 Via della Rosa
                <br />
                New York, NY 10013
              </p>
            </div>

            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#9a5a4e]">
                Hours
              </p>

              <p>
                Tue–Thu 5–10pm
                <br />
                Fri–Sat 5–11pm
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-6 pb-10 text-[10px] uppercase tracking-[0.2em] text-[#8d887f] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>© 2026 Lume Italian Kitchen</span>

        <span className="font-serif text-lg normal-case tracking-normal text-[#713d35]">
          Lume
        </span>

        <a
          href="#top"
          className="flex items-center gap-2 hover:text-[#713d35]"
        >
          Back to top
          <ChevronDown
            className="rotate-180"
            data-icon="inline-end"
          />
        </a>

        <span
          aria-hidden="true"
          className="font-serif text-lg normal-case tracking-normal text-[#713d35]"
        >
          ✦
        </span>
      </footer>
    </main>
  )
}
