'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageContainer from '@/components/layout/PageContainer';
import { mockInterviews } from '@/data/mockData';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function AdminInterviews() {
  return (
    <PageContainer>
      <section className="bg-hero-gradient py-8 md:py-10">
        <div className="container-custom flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Interviews Management
            </h1>
            <p className="text-white/80">
              Schedule and manage interviews.
            </p>
          </div>
          <Button asChild>
            <Link href="/admin/dashboard" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="space-y-4">
            {mockInterviews.map((interview) => (
              <Card key={interview.id}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-8 h-8 text-primary" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{interview.candidateName}</h3>
                      <p className="text-sm text-muted-foreground">{interview.jobTitle}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {interview.date} at {interview.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-muted-foreground">{interview.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
