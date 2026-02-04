import Link from 'next/link';
import { ArrowRight, Users, Briefcase, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageContainer from '@/components/layout/PageContainer';

const features = [
  {
    icon: Briefcase,
    title: 'Explore Opportunities',
    description: 'Browse through exciting career opportunities across various departments and find your perfect role.',
  },
  {
    icon: Users,
    title: 'Seamless Application',
    description: 'Apply with ease using our streamlined application process. Track your progress in real-time.',
  },
  {
    icon: Award,
    title: 'Growth & Development',
    description: 'Join a team that invests in your growth with continuous learning and development opportunities.',
  },
  {
    icon: TrendingUp,
    title: 'Career Advancement',
    description: 'Build your career with clear progression paths and mentorship from industry experts.',
  },
];

const stats = [
  { value: '500+', label: 'Team Members' },
  { value: '50+', label: 'Open Positions' },
  { value: '25+', label: 'Countries' },
  { value: '98%', label: 'Employee Satisfaction' },
];

export default function Index() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-hero-gradient opacity-95" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              🚀 We&apos;re Hiring! Join Our Team
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build Your Career with{' '}
              <span className="text-accent">BootWay</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              Join India&apos;s first iNaaS provider and be part of revolutionizing indoor navigation technology. 
              Discover exciting opportunities that match your skills and aspirations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/careers" className="flex items-center">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join <span className="text-gradient">BootWay</span>?
            </h2>
            <p className="text-muted-foreground">
              We offer more than just a job. Join a team of innovators building cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-card card-hover border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Explore our open positions and find the perfect role that matches your skills and career goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/careers" className="flex items-center">
                  Browse All Jobs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/70 text-sm">
              {['Remote Friendly', 'Health Benefits', 'Learning Budget', 'Flexible Hours'].map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
