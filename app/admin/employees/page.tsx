'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageContainer from '@/components/layout/PageContainer';
import { useUsers } from '@/hooks/useApi';
import { ArrowLeft, Mail, Loader2 } from 'lucide-react';

export default function AdminEmployees() {
  const { data: users = [], isLoading, error } = useUsers();

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
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-8 text-muted-foreground">
              Error loading employees. Please try again.
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No employees found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user) => (
                <Card key={user._id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{user.fullName}</CardTitle>
                    <p className="text-sm text-muted-foreground capitalize">{user.role}</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      {user.email}
                    </div>
                    {user.department && (
                      <p className="text-sm text-muted-foreground">📊 {user.department}</p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      📅 Joined {new Date(user.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageContainer>
  );
}
