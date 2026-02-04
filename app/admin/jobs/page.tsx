'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageContainer from '@/components/layout/PageContainer';
import { ArrowLeft, Plus } from 'lucide-react';
import { getJobs } from '@/lib/apiClient';

interface Job {
  _id: string;
  title: string;
  department: string;
  location?: string;
  type: string;
  salary?: string;
  isActive: boolean;
}

export default function AdminJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data.data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <section className="bg-hero-gradient py-8 md:py-10">
        <div className="container-custom flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Jobs Management
            </h1>
            <p className="text-white/80">
              Manage job postings and recruitment pipeline.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/admin/jobs/post" className="flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Post Job
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/admin/dashboard" className="flex items-center text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading jobs...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No jobs posted yet</p>
              <Button asChild>
                <Link href="/admin/jobs/post">Post First Job</Link>
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <Card key={job._id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{job.department}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground space-y-1">
                      {job.location && <p>📍 {job.location}</p>}
                      <p>💼 {job.type}</p>
                      {job.salary && <p>💰 {job.salary}</p>}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => {
                          // Toggle job status
                          console.log('Toggle status for job:', job._id);
                        }}
                      >
                        {job.isActive ? 'Close' : 'Reopen'}
                      </Button>
                    </div>
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
