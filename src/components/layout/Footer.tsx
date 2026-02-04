'use client';

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-foreground">Boot</span>
              <span className="text-2xl font-bold text-accent">Way</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering careers through seamless HR management. Join our team and be part of something extraordinary.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Careers", path: "/careers" },
                { name: "About Us", path: "/" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For HR */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For HR</h3>
            <ul className="space-y-2">
              {[
                { name: "HR Login", path: "/admin/login" },
                { name: "Dashboard", path: "/admin/dashboard" },
                { name: "Manage Jobs", path: "/admin/jobs" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Tech Park, Bangalore, India 560001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:careers@bootway.in" className="text-primary-foreground/70 hover:text-primary-foreground text-sm">
                  careers@bootway.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+917976866822" className="text-primary-foreground/70 hover:text-primary-foreground text-sm">
                  +91 797 686 6822
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 BootWay. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm">
              Privacy Policy
            </Link>
            <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
