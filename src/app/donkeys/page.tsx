import { Header } from '@/components/donkey/header';
import { Footer } from '@/components/donkey/footer';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const donkeyProfiles = [
  {
    id: 'benjamin',
    name: 'Benjamin',
    age: 12,
    personality: 'Gentle Giant',
    image: '/generated/benjamin-profile.png',
    favoriteActivity: 'Munching on apples',
    story: 'Benjamin came to us in 2019 after being rescued from neglect. Despite his past, he has the gentlest soul and loves being around people. At 12 years old, he serves as a calming presence for our younger donkeys.',
    traits: ['Patient', 'Loving', 'Calm'],
  },
  {
    id: 'luna',
    name: 'Luna',
    age: 4,
    personality: 'Curious Explorer',
    image: '/generated/luna-profile.png',
    favoriteActivity: 'Investigating everything',
    story: 'Luna is our youngest and most curious resident. She loves exploring every corner of the sanctuary and is always the first to greet visitors. Her playful energy brings joy to everyone she meets.',
    traits: ['Playful', 'Inquisitive', 'Energetic'],
  },
  {
    id: 'charlie',
    name: 'Charlie',
    age: 18,
    personality: 'Wise Elder',
    image: '/generated/charlie-profile.png',
    favoriteActivity: 'Mentoring younger donkeys',
    story: "Charlie is the wise elder of our sanctuary. At 18 years old, he's seen it all and helps guide our younger donkeys. He was our first rescue and holds a special place in everyone's hearts.",
    traits: ['Wise', 'Protective', 'Dignified'],
  },
  {
    id: 'daisy',
    name: 'Daisy',
    age: 7,
    personality: 'Social Butterfly',
    image: '/generated/daisy-profile.png',
    favoriteActivity: 'Greeting every visitor',
    story: 'Daisy is our official greeter! She absolutely loves people and will come running whenever she sees someone approaching. Her friendly nature makes her perfect for our educational programs.',
    traits: ['Friendly', 'Social', 'Enthusiastic'],
  },
];

export default function DonkeysPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="section bg-[hsl(var(--secondary))]">
        <div className="container text-center">
          <h1
            className="mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Meet Our Donkeys
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Each of our rescued donkeys has a unique personality and story. Get to know the
            wonderful individuals who call Gentle Hoof Haven their home.
          </p>
        </div>
      </section>

      {/* Donkey Profiles Grid */}
      <section className="section bg-[hsl(var(--background))]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {donkeyProfiles.map((donkey) => (
              <div
                key={donkey.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Profile Image */}
                <div className="relative h-80 w-full">
                  <Image
                    src={donkey.image}
                    alt={`${donkey.name} the donkey`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Profile Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3
                        className="text-2xl mb-1"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {donkey.name}
                      </h3>
                      <p className="text-[hsl(var(--muted-foreground))]">
                        Age {donkey.age} • {donkey.personality}
                      </p>
                    </div>
                  </div>

                  <p className="text-base mb-4 leading-relaxed">
                    {donkey.story}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                      Favorite Activity:
                    </p>
                    <p className="text-base">{donkey.favoriteActivity}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[hsl(var(--primary))] mb-2">
                      Personality Traits:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {donkey.traits.map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] rounded-full text-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-[hsl(var(--accent))] text-white">
        <div className="container text-center">
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Want to Meet Them in Person?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Schedule a visit to our sanctuary and spend time with these wonderful animals.
            We offer tours, educational programs, and volunteer opportunities.
          </p>
          <Link
            href="/visit"
            className="btn-pill bg-white text-[hsl(var(--accent))] hover:shadow-lg inline-block"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
