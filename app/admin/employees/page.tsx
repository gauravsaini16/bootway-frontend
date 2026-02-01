'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageContainer from '@/components/layout/PageContainer';
import { mockEmployees } from '@/data/mockData';
import { ArrowLeft, Mail } from 'lucide-react';

export default function AdminEmployees() {
  return (
    <PageContainer>
      <section className="bg-hero-gradient py-8 md:py-10">
        <div className="container-custom flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Employees Directory
            </h1>
            <p className="text-white/80">
              View and manage employee information.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEmployees.map((employee) => (
              <Card key={employee.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{employee.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{employee.position}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    {employee.email}
                  </div>
                  <p className="text-sm text-muted-foreground">📊 {employee.department}</p>
                  <p className="text-sm text-muted-foreground">📅 Joined {employee.joinDate}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
