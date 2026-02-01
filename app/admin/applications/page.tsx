'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageContainer from '@/components/layout/PageContainer';
import StatusBadge from '@/components/common/StatusBadge';
import { mockApplications } from '@/data/mockData';
import { ArrowLeft } from 'lucide-react';

export default function AdminApplications() {
  return (
    <PageContainer>
      <section className="bg-hero-gradient py-8 md:py-10">
        <div className="container-custom flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Applications Management
            </h1>
            <p className="text-white/80">
              Review and manage all job applications.
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
            {mockApplications.map((app) => (
              <Card key={app.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{app.candidateName}</h3>
                      <p className="text-sm text-muted-foreground">{app.jobTitle}</p>
                      <p className="text-xs text-muted-foreground mt-1">{app.email}</p>
                    </div>
                    <StatusBadge status={app.status} />
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
