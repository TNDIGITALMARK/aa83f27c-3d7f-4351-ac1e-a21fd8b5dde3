import { Header } from '@/components/donkey/header';
import { Footer } from '@/components/donkey/footer';
import { Brain, Heart, Globe, History } from 'lucide-react';

export const dynamic = 'force-dynamic';

const educationalTopics = [
  {
    id: 1,
    icon: Brain,
    title: 'Donkeys vs. Mules',
    subtitle: 'Clearing Up the Confusion',
    content:
      "Many people confuse donkeys with mules, but they're quite different! A donkey is a separate species (Equus asinus), while a mule is a hybrid - the offspring of a male donkey and a female horse. Donkeys are smaller, have longer ears, and possess unique personalities that set them apart.",
    facts: [
      'Donkeys have 62 chromosomes, horses have 64, and mules have 63',
      'Mules are typically sterile and cannot reproduce',
      'Donkeys are more independent thinkers than horses',
    ],
  },
  {
    id: 2,
    icon: History,
    title: 'Ancient History',
    subtitle: 'Donkeys Built Civilizations',
    content:
      'Donkeys have been working alongside humans for over 5,000 years! They were first domesticated in ancient Egypt and became essential to the development of trade routes, agriculture, and transportation. The famous Silk Road relied heavily on donkeys to carry goods across vast distances.',
    facts: [
      'Domesticated around 3000 BCE in northeast Africa',
      'Carried supplies for ancient Egyptian pyramids',
      'Essential to the development of early civilizations',
    ],
  },
  {
    id: 3,
    icon: Brain,
    title: 'Intelligence Studies',
    subtitle: 'Donkeys Remember Faces for 25 Years',
    content:
      'Scientific studies have shown that donkeys have exceptional memory and intelligence. They can remember places and other donkeys they knew over 25 years ago! Their cautious nature, often mistaken for stubbornness, is actually careful assessment - they think before they act.',
    facts: [
      'Can recognize and remember individual faces for decades',
      'Problem-solving abilities comparable to dogs',
      'Their "stubbornness" is actually intelligent self-preservation',
    ],
  },
  {
    id: 4,
    icon: Heart,
    title: 'Therapy Donkeys',
    subtitle: 'Healing Hearts Worldwide',
    content:
      "Donkeys are increasingly being used in therapeutic settings. Their calm, gentle nature and intuitive understanding of human emotions make them excellent therapy animals. They've helped children with autism, veterans with PTSD, and people recovering from trauma.",
    facts: [
      'Naturally patient and non-judgmental',
      'Lower stress hormones in people who interact with them',
      'Effective in equine-assisted therapy programs',
    ],
  },
  {
    id: 5,
    icon: Globe,
    title: 'Conservation Efforts',
    subtitle: 'Protecting Wild Donkey Species',
    content:
      'While domestic donkeys are common, several wild donkey species are endangered. The African wild ass and the Asiatic wild ass face habitat loss and hunting pressures. Conservation organizations are working to protect these remarkable animals in their natural habitats.',
    facts: [
      'African wild ass is critically endangered',
      'Only a few hundred wild Somali wild asses remain',
      'Habitat restoration programs are making a difference',
    ],
  },
];

export default function LearnPage() {
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
            Donkey Facts & Education
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover the fascinating world of donkeys - their intelligence, history, and the
            important role they play in our world.
          </p>
        </div>
      </section>

      {/* Educational Content */}
      <section className="section bg-[hsl(var(--background))]">
        <div className="container">
          <div className="space-y-12">
            {educationalTopics.map((topic, index) => {
              const Icon = topic.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={topic.id}
                  className={`grid md:grid-cols-2 gap-8 items-start ${
                    isEven ? '' : 'md:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'md:col-start-2'}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2
                          className="text-2xl mb-1"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {topic.title}
                        </h2>
                        <p className="text-[hsl(var(--muted-foreground))] font-medium">
                          {topic.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed mb-6">{topic.content}</p>

                    <div className="bg-[hsl(var(--secondary))]/30 rounded-lg p-6">
                      <h4 className="font-semibold text-[hsl(var(--primary))] mb-3">
                        Quick Facts:
                      </h4>
                      <ul className="space-y-2">
                        {topic.facts.map((fact, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[hsl(var(--primary))] mt-1">•</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
                    <div className="aspect-square bg-[hsl(var(--muted))] rounded-xl flex items-center justify-center">
                      <Icon className="w-24 h-24 text-[hsl(var(--primary))] opacity-20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="section bg-[hsl(var(--secondary))]">
        <div className="container">
          <h2
            className="text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            More Amazing Donkey Facts
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-[hsl(var(--primary))] mb-2 text-lg">
                Incredible Vision
              </h4>
              <p>
                Donkeys can see all four of their feet at the same time! Their eyes are positioned
                on the sides of their head, giving them nearly 360-degree vision.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-[hsl(var(--primary))] mb-2 text-lg">
                Desert Adaptations
              </h4>
              <p>
                Donkeys evolved in desert environments and can survive on minimal water. They can
                lose up to 30% of their body weight in water and still function normally.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-[hsl(var(--primary))] mb-2 text-lg">Long Lifespan</h4>
              <p>
                With proper care, donkeys can live 30-50 years! Some have even reached 60 years old,
                making them long-term companions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-[hsl(var(--primary))] mb-2 text-lg">
                Vocal Communication
              </h4>
              <p>
                The famous donkey "hee-haw" bray can be heard up to 3 kilometers away! They use
                different sounds to communicate various emotions and needs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-[hsl(var(--primary))] mb-2 text-lg">
                Natural Protectors
              </h4>
              <p>
                Donkeys have a natural instinct to protect their herd. They're often used as
                livestock guardians, defending sheep and goats from predators.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-[hsl(var(--primary))] mb-2 text-lg">
                Social Creatures
              </h4>
              <p>
                Donkeys form strong bonds with other donkeys and can become depressed if kept alone.
                They thrive in pairs or small herds.
              </p>
            </div>
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
            Help Us Educate Others
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Support our educational programs and help change perceptions about these remarkable
            animals. Every donation helps us reach more people.
          </p>
          <a
            href="/support"
            className="btn-pill bg-white text-[hsl(var(--accent))] hover:shadow-lg inline-block"
          >
            Support Education Programs
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
