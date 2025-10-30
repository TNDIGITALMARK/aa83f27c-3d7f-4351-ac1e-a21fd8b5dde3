import { Header } from '@/components/donkey/header';
import { Footer } from '@/components/donkey/footer';
import { DonkeyCard } from '@/components/donkey/donkey-card';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const featuredDonkeys = [
  {
    name: 'Benjamin',
    age: 12,
    personality: 'Gentle Giant',
    image: '/generated/benjamin-profile.png',
    slug: 'benjamin',
  },
  {
    name: 'Luna',
    age: 4,
    personality: 'Curious Explorer',
    image: '/generated/luna-profile.png',
    slug: 'luna',
  },
  {
    name: 'Charlie',
    age: 18,
    personality: 'Wise Elder',
    image: '/generated/charlie-profile.png',
    slug: 'charlie',
  },
  {
    name: 'Daisy',
    age: 7,
    personality: 'Social Butterfly',
    image: '/generated/daisy-profile.png',
    slug: 'daisy',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/generated/hero-donkey.png"
          alt="Beautiful donkey in golden meadow"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Where Every Hoof
            <br />
            Finds a Home
          </h1>
          <Link
            href="/donkeys"
            className="btn-pill bg-white text-[hsl(var(--primary))] hover:shadow-lg inline-block"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Meet Our Donkeys Section */}
      <section className="section bg-[hsl(var(--background))]">
        <div className="container">
          <h2
            className="text-center mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Meet Our Donkeys
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {featuredDonkeys.map((donkey) => (
              <DonkeyCard key={donkey.name} {...donkey} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/donkeys"
              className="inline-block px-8 py-3 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-full font-medium hover:bg-[hsl(var(--primary))] hover:text-white transition-all"
            >
              View All Donkeys
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section bg-[hsl(var(--secondary))]">
        <div className="container">
          <h2
            className="text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4">
                Gentle Hoof Haven is dedicated to providing a safe, loving home for rescued donkeys.
                We believe every donkey deserves respect, care, and a chance to live peacefully.
              </p>
              <p className="text-lg mb-4">
                Through education and community engagement, we work to change perceptions about
                these remarkable animals and promote their welfare worldwide.
              </p>
              <p className="text-lg">
                Our sanctuary provides lifetime care for donkeys who have been abandoned, neglected,
                or can no longer be cared for by their previous owners.
              </p>
            </div>

            <div className="relative">
              {/* Simple donkey illustration placeholder */}
              <div className="w-full aspect-square max-w-[300px] mx-auto">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full opacity-60"
                >
                  <path
                    d="M100 30 L120 50 L120 80 L100 100 L80 80 L80 50 Z M90 100 L90 150 M110 100 L110 150 M70 60 L60 40 M130 60 L140 40"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="90" cy="70" r="3" fill="hsl(var(--primary))" />
                  <circle cx="110" cy="70" r="3" fill="hsl(var(--primary))" />
                  <path
                    d="M90 85 Q100 90 110 85"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Our Sanctuary Section */}
      <section className="section bg-[hsl(var(--accent))] text-white">
        <div className="container text-center">
          <h2
            className="mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Support Our Sanctuary
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Your donations help us provide food, veterinary care, and shelter for our rescued donkeys.
            Every contribution makes a difference in their lives.
          </p>
          <Link
            href="/support"
            className="btn-pill bg-white text-[hsl(var(--accent))] hover:shadow-lg inline-block"
          >
            Donate Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
