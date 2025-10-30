import { Header } from '@/components/donkey/header';
import { Footer } from '@/components/donkey/footer';
import { Heart, Users, GraduationCap, Home } from 'lucide-react';

export const dynamic = 'force-dynamic';

const supportOptions = [
  {
    icon: Heart,
    title: 'One-Time Donation',
    description: 'Make a direct impact with a one-time contribution to help feed, shelter, and care for our rescued donkeys.',
    amount: 'Any Amount',
  },
  {
    icon: Users,
    title: 'Monthly Sponsorship',
    description: 'Become a monthly sponsor and provide ongoing support. Receive updates and photos of the donkeys you help.',
    amount: '$25-$100/month',
  },
  {
    icon: GraduationCap,
    title: 'Education Programs',
    description: 'Support our educational initiatives that teach communities about donkey care and welfare.',
    amount: '$50-$500',
  },
  {
    icon: Home,
    title: 'Sanctuary Improvements',
    description: 'Help us maintain and improve our facilities, including shelters, fencing, and medical equipment.',
    amount: '$100-$1000',
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="section bg-[hsl(var(--accent))] text-white">
        <div className="container text-center">
          <h1
            className="mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Support Our Sanctuary
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95 leading-relaxed">
            Your generosity helps us provide lifetime care for rescued donkeys. Every donation
            makes a real difference in their lives - from food and veterinary care to shelter
            and enrichment activities.
          </p>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="section bg-[hsl(var(--background))]">
        <div className="container">
          <h2
            className="text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ways to Support
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {supportOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-[hsl(var(--border))]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl mb-2"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {option.title}
                      </h3>
                      <p className="text-sm text-[hsl(var(--primary))] font-semibold mb-3">
                        {option.amount}
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">{option.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section bg-[hsl(var(--secondary))]">
        <div className="container">
          <h2
            className="text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[hsl(var(--primary))] mb-2">$50</div>
              <p className="text-lg">
                Provides a week of nutritious food for one donkey
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[hsl(var(--primary))] mb-2">$150</div>
              <p className="text-lg">
                Covers routine veterinary care and hoof trimming
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[hsl(var(--primary))] mb-2">$500</div>
              <p className="text-lg">
                Helps maintain shelter and facilities for a month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="section bg-[hsl(var(--background))]">
        <div className="container">
          <h2
            className="text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Other Ways to Help
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Volunteer
              </h3>
              <p className="mb-4">
                Spend time with our donkeys and help with daily sanctuary operations.
              </p>
              <a
                href="/volunteer"
                className="text-[hsl(var(--primary))] font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>

            <div className="text-center">
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Spread the Word
              </h3>
              <p className="mb-4">
                Follow us on social media and share our mission with your friends and family.
              </p>
              <a
                href="#"
                className="text-[hsl(var(--primary))] font-medium hover:underline"
              >
                Follow Us →
              </a>
            </div>

            <div className="text-center">
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Corporate Sponsorship
              </h3>
              <p className="mb-4">
                Partner with us to support donkey welfare through corporate giving programs.
              </p>
              <a
                href="mailto:info@gentlehoofhaven.org"
                className="text-[hsl(var(--primary))] font-medium hover:underline"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="section bg-[hsl(var(--accent))] text-white">
        <div className="container text-center">
          <h2
            className="mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Make a Difference Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Your donation, no matter the size, helps us continue our mission of providing safe
            haven and lifetime care for rescued donkeys.
          </p>
          <button
            className="btn-pill bg-white text-[hsl(var(--accent))] hover:shadow-lg"
          >
            Donate Now
          </button>
          <p className="mt-4 text-sm opacity-75">
            Gentle Hoof Haven is a 501(c)(3) nonprofit organization. All donations are tax-deductible.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
