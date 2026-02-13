'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Briefcase, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout, isAdminOrHR } = useAuthContext();
  const pathname = usePathname();
  const isAdminPath = pathname?.startsWith("/admin") ?? false;

  const candidateLinks = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    ...(isAuthenticated ? [{ name: "My Applications", path: "/applications" }] : []),
  ];

  const adminLinks = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Jobs", path: "/admin/jobs" },
    { name: "Interviews", path: "/admin/interviews" },
    { name: "Offers", path: "/admin/offers" },
    { name: "Employees", path: "/admin/employees" },
  ];

  const links = isAdminPath ? adminLinks : candidateLinks;

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={isAdminPath ? "/admin/dashboard" : "/"} className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Boot</span>
              <span className="text-2xl font-bold text-accent">Way</span>
            </div>
            {isAdminPath && (
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
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === link.path
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
            {isAdminPath ? (
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <User className="w-4 h-4 mr-1" />
                  Candidate View
                </Link>
              </Button>
            ) : (
              <>
                {isAuthenticated ? (
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">Hello, {user?.fullName}</span>
                    <Button variant="outline" size="sm" onClick={handleLogout}>
                      Logout
                    </Button>
                    {isAdminOrHR && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/admin/dashboard">
                          HR Portal
                        </Link>
                      </Button>
                    )}
                  </div>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/login">
                        <LogIn className="w-4 h-4 mr-1" />
                        Login
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="/candidate/signup">
                        Sign Up
                      </Link>
                    </Button>
                  </>
                )}
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
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2">
                {isAdminPath ? (
                  <Button variant="outline" size="sm" asChild className="justify-start">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      <User className="w-4 h-4 mr-2" />
                      Candidate View
                    </Link>
                  </Button>
                ) : (
                  <>
                    {isAuthenticated ? (
                      <>
                        <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                          Signed in as {user?.fullName}
                        </div>
                        <Button variant="outline" size="sm" onClick={handleLogout} className="justify-start">
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="ghost" size="sm" asChild className="justify-start">
                          <Link href="/login" onClick={() => setIsOpen(false)}>
                            <LogIn className="w-4 h-4 mr-2" />
                            Login
                          </Link>
                        </Button>
                        <Button size="sm" asChild className="justify-start">
                          <Link href="/candidate/signup" onClick={() => setIsOpen(false)}>
                            <User className="w-4 h-4 mr-2" />
                            Sign Up
                          </Link>
                        </Button>
                      </>
                    )}
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
