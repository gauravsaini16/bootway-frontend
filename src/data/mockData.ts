// Mock data for the HR Portal

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  salary?: string;
  postedAt: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  status: "active" | "closed";
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  candidateName: string;
  email: string;
  phone: string;
  appliedAt: string;
  status: "applied" | "screening" | "shortlisted" | "interview" | "selected" | "rejected";
  resumeUrl?: string;
}

export interface Interview {
  id: string;
  applicationId: string;
  candidateName: string;
  jobTitle: string;
  date: string;
  time: string;
  meetLink: string;
  interviewer: string;
  status: "scheduled" | "completed" | "cancelled";
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  joinDate: string;
  status: "active" | "inactive";
  avatar?: string;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "full-time",
    salary: "18-25 LPA",
    postedAt: "2 days ago",
    description: "We're looking for an experienced Frontend Developer to join our growing team. You'll be working on cutting-edge navigation solutions using React, TypeScript, and modern web technologies.",
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React and TypeScript",
      "Experience with state management (Redux, Zustand)",
      "Strong understanding of CSS and responsive design",
      "Experience with testing frameworks",
    ],
    responsibilities: [
      "Lead frontend architecture decisions",
      "Mentor junior developers",
      "Collaborate with design and backend teams",
      "Write clean, maintainable code",
      "Participate in code reviews",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible working hours",
      "Remote work options",
      "Learning and development budget",
    ],
    status: "active",
  },
  {
    id: "2",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "full-time",
    salary: "20-30 LPA",
    postedAt: "5 days ago",
    description: "Join us as a Product Manager to drive the vision and strategy for our indoor navigation products. You'll work closely with engineering, design, and business teams.",
    requirements: [
      "3+ years of product management experience",
      "Experience with B2B SaaS products",
      "Strong analytical skills",
      "Excellent communication skills",
      "Technical background preferred",
    ],
    responsibilities: [
      "Define product roadmap and strategy",
      "Gather and prioritize requirements",
      "Work with stakeholders across teams",
      "Analyze market trends and competition",
      "Drive product launches",
    ],
    benefits: [
      "Equity options",
      "Unlimited PTO",
      "Health and wellness benefits",
      "Home office setup allowance",
      "Annual company retreats",
    ],
    status: "active",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    department: "Design",
    location: "Bangalore, India",
    type: "full-time",
    salary: "12-18 LPA",
    postedAt: "1 week ago",
    description: "We need a creative UI/UX Designer to craft beautiful and intuitive user experiences for our navigation platform.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and design tools",
      "Strong portfolio showcasing mobile and web designs",
      "Understanding of user research methods",
      "Knowledge of design systems",
    ],
    responsibilities: [
      "Create wireframes and prototypes",
      "Conduct user research and testing",
      "Maintain design system",
      "Collaborate with developers",
      "Present designs to stakeholders",
    ],
    benefits: [
      "Creative freedom",
      "Latest design tools",
      "Flexible schedule",
      "Health benefits",
      "Professional development",
    ],
    status: "active",
  },
  {
    id: "4",
    title: "Backend Developer Intern",
    department: "Engineering",
    location: "Bangalore, India",
    type: "internship",
    salary: "25-40K/month",
    postedAt: "3 days ago",
    description: "Great opportunity for students to learn backend development with Node.js, databases, and cloud technologies.",
    requirements: [
      "Currently pursuing CS or related degree",
      "Basic knowledge of JavaScript/TypeScript",
      "Understanding of databases",
      "Eagerness to learn",
      "Good problem-solving skills",
    ],
    responsibilities: [
      "Assist with API development",
      "Write unit tests",
      "Document code",
      "Participate in team meetings",
      "Learn from senior developers",
    ],
    benefits: [
      "Mentorship",
      "Certificate",
      "PPO opportunity",
      "Flexible hours",
      "Learning resources",
    ],
    status: "active",
  },
];

export const mockApplications: Application[] = [
  {
    id: "app-1",
    jobId: "1",
    jobTitle: "Senior Frontend Developer",
    candidateName: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    appliedAt: "2024-01-15",
    status: "interview",
  },
  {
    id: "app-2",
    jobId: "2",
    jobTitle: "Product Manager",
    candidateName: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 98765 43211",
    appliedAt: "2024-01-14",
    status: "shortlisted",
  },
  {
    id: "app-3",
    jobId: "1",
    jobTitle: "Senior Frontend Developer",
    candidateName: "Amit Kumar",
    email: "amit.kumar@email.com",
    phone: "+91 98765 43212",
    appliedAt: "2024-01-13",
    status: "screening",
  },
  {
    id: "app-4",
    jobId: "3",
    jobTitle: "UI/UX Designer",
    candidateName: "Sneha Reddy",
    email: "sneha.reddy@email.com",
    phone: "+91 98765 43213",
    appliedAt: "2024-01-12",
    status: "selected",
  },
  {
    id: "app-5",
    jobId: "4",
    jobTitle: "Backend Developer Intern",
    candidateName: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "+91 98765 43214",
    appliedAt: "2024-01-11",
    status: "applied",
  },
];

export const mockInterviews: Interview[] = [
  {
    id: "int-1",
    applicationId: "app-1",
    candidateName: "Rahul Sharma",
    jobTitle: "Senior Frontend Developer",
    date: "2024-01-20",
    time: "10:00 AM",
    meetLink: "https://meet.google.com/abc-defg-hij",
    interviewer: "John Doe",
    status: "scheduled",
  },
  {
    id: "int-2",
    applicationId: "app-2",
    candidateName: "Priya Patel",
    jobTitle: "Product Manager",
    date: "2024-01-21",
    time: "2:00 PM",
    meetLink: "https://meet.google.com/xyz-uvwx-rst",
    interviewer: "Jane Smith",
    status: "scheduled",
  },
];

export const mockEmployees: Employee[] = [
  {
    id: "emp-1",
    name: "Sneha Reddy",
    email: "sneha.reddy@bootway.in",
    department: "Design",
    position: "UI/UX Designer",
    joinDate: "2024-01-15",
    status: "active",
  },
  {
    id: "emp-2",
    name: "Arjun Menon",
    email: "arjun.menon@bootway.in",
    department: "Engineering",
    position: "Senior Developer",
    joinDate: "2023-06-01",
    status: "active",
  },
  {
    id: "emp-3",
    name: "Kavitha Nair",
    email: "kavitha.nair@bootway.in",
    department: "Product",
    position: "Product Manager",
    joinDate: "2023-08-15",
    status: "active",
  },
];

// Stats for dashboard
export const dashboardStats = {
  totalApplications: 156,
  shortlisted: 42,
  interviews: 18,
  selected: 12,
  activeEmployees: 45,
};
