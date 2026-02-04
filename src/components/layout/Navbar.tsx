'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Briefcase, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  const candidateLinks = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
  ];

  const adminLinks = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Jobs", path: "/admin/jobs" },
    { name: "Interviews", path: "/admin/interviews" },
    { name: "Offers", path: "/admin/offers" },
    { name: "Employees", path: "/admin/employees" },
  ];

  const links = isAdmin ? adminLinks : candidateLinks;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={isAdmin ? "/admin/dashboard" : "/"} className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Boot</span>
              <span className="text-2xl font-bold text-accent">Way</span>
            </div>
            {isAdmin && (
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                HR Portal
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {isAdmin ? (
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <User className="w-4 h-4 mr-1" />
                  Candidate View
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/admin/login">
                    <LogIn className="w-4 h-4 mr-1" />
                    HR Login
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/careers">
                    <Briefcase className="w-4 h-4 mr-1" />
                    View Careers
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2">
                {isAdmin ? (
                  <Button variant="outline" size="sm" asChild className="justify-start">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      <User className="w-4 h-4 mr-2" />
                      Candidate View
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" asChild className="justify-start">
                      <Link href="/admin/login" onClick={() => setIsOpen(false)}>
                        <LogIn className="w-4 h-4 mr-2" />
                        HR Login
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="justify-start">
                      <Link href="/careers" onClick={() => setIsOpen(false)}>
                        <Briefcase className="w-4 h-4 mr-2" />
                        View Careers
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
