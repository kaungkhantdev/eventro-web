'use client'

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Copyright } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'

const footerLinks = {
  discover: {
    title: 'Discover',
    links: [
      { name: 'Browse Events', href: '#' },
      { name: 'Categories', href: '#' },
      { name: 'Trending', href: '#' },
      { name: 'Near You', href: '#' },
      { name: 'This Weekend', href: '#' }
    ]
  },
  eventro: {
    title: 'Eventro',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' }
    ]
  },
  account: {
    title: 'Account',
    links: [
      { name: 'Sign Up', href: '#' },
      { name: 'Log In', href: '#' },
      { name: 'My Tickets', href: '#' },
      { name: 'Create Event', href: '#' },
      { name: 'Organizer Dashboard', href: '#' }
    ]
  }
}

const socialLinks = [
  { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#', color: 'hover:text-blue-500' },
  { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#', color: 'hover:text-sky-500' },
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#', color: 'hover:text-pink-500' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#', color: 'hover:text-blue-600' },
  { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#', color: 'hover:text-red-500' }
]

export function Footer() {
  return (
    <footer className="">
      <div className="px-6 sm:px-6 lg:px-12 py-6 lg:py-12 rounded-3xl border-border border-t lg:border lg:m-5">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <Image
              src={Logo}
              alt="Eventro Logo"
              width={40}
              height={40}
              className="h-6 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Discover and book the best events around you. From concerts to conferences,
              we bring people together for unforgettable experiences.
            </p>


            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center transition-all hover:scale-110 hover:border-sky-500/50 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Discover Links */}
          <div>
            <h3 className="font-semibold mb-4">{footerLinks.discover.title}</h3>
            <ul className="space-y-3">
              {footerLinks.discover.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-sky-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Eventro Links */}
          <div>
            <h3 className="font-semibold mb-4">{footerLinks.eventro.title}</h3>
            <ul className="space-y-3">
              {footerLinks.eventro.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-sky-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="font-semibold mb-4">{footerLinks.account.title}</h3>
            <ul className="space-y-3">
              {footerLinks.account.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-sky-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="flex items-center gap-2 text-muted-foreground text-sm text-center md:text-left">
              <Copyright size={'14px'} /> {new Date().getFullYear()} Eventro. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-sky-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-sky-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-sky-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
