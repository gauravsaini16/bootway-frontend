'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Upload, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import PageContainer from '@/components/layout/PageContainer';
import JobApplicationForm from '@/components/candidate/JobApplicationForm';

export default function ApplyPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params?.jobId as string;

  if (!jobId) {
    return (
      <PageContainer>
        <div className="container-custom section-padding text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid Job ID</h1>
          <Button asChild>
            <Link href="/careers">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Link>
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <JobApplicationForm jobId={jobId} />
    </PageContainer>
  );
}
