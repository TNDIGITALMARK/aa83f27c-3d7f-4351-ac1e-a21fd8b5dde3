import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[hsl(var(--footer))] text-[hsl(var(--footer-foreground))]">
      <div className="container max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Us
            </h3>
            <div className="space-y-2 text-sm opacity-90">
              <p>Gentle Hoof Haven</p>
              <p>123 Meadow Lane</p>
              <p>Countryside, ST 12345</p>
              <p className="pt-2">
                <a href="mailto:info@gentlehoofhaven.org" className="hover:underline">
                  info@gentlehoofhaven.org
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/donkeys" className="hover:underline">
                  Meet Our Donkeys
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:underline">
                  Learn About Donkeys
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:underline">
                  Support Our Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:underline">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:underline">
                  Visit Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Follow Us
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Stay connected for updates on our donkeys and sanctuary events.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Gentle Hoof Haven. All rights reserved. | A sanctuary for rescued donkeys.</p>
        </div>
      </div>
    </footer>
  );
}
