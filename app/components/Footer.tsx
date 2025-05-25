'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-netflix-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="relative w-[200px] h-[70px] mb-4">
              <Image
                src="/assets/logo.png"
                alt="BLEACH Core"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-netflix-gray mb-4">
              Sperimenta i capitoli più importanti di BLEACH, selezionati per l'esperienza di visione più completa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-netflix-gray hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/episodes/s1/1" className="text-netflix-gray hover:text-white transition-colors">
                  Episodi
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-netflix-gray hover:text-white transition-colors">
                  Chi Siamo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-netflix-gray">
                <EnvelopeIcon className="w-5 h-5" />
                <a href="mailto:exystech@gmail.com" className="hover:text-white transition-colors">
                  exystech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-netflix-gray">
                <MapPinIcon className="w-5 h-5" />
                <span>Soul Society</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a href="https://x.com/ryzenstechdev" target="_blank" rel="noopener noreferrer" className="text-netflix-gray hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://dsc.gg/teamshinigamicore" target="_blank" rel="noopener noreferrer" className="text-netflix-gray hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-netflix-gray">
          <p>&copy; {new Date().getFullYear()} BLEACH Core. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
} 