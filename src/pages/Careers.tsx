import { useState } from "react";
import { Search, Filter, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageContainer from "@/components/layout/PageContainer";
import JobCard from "@/components/candidate/JobCard";
import { mockJobs } from "@/data/mockData";

const departments = ["All Departments", "Engineering", "Product", "Design", "Sales"];
const types = ["All Types", "Full Time", "Part Time", "Contract", "Internship"];
const locations = ["All Locations", "Bangalore, India", "Remote", "Mumbai, India"];

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [jobType, setJobType] = useState("All Types");
  const [location, setLocation] = useState("All Locations");

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      department === "All Departments" || job.department === department;
    const matchesType =
      jobType === "All Types" ||
      job.type === jobType.toLowerCase().replace(" ", "-");
    const matchesLocation =
      location === "All Locations" || job.location === location;

    return matchesSearch && matchesDepartment && matchesType && matchesLocation && job.status === "active";
  });

  return (
    <PageContainer>
      {/* Header */}
      <section className="bg-hero-gradient py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-white/80 text-lg">
              Explore exciting opportunities at BootWay and take the next step in your career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-border sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search jobs by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger className="w-[180px] h-11">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger className="w-[160px] h-11">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-[180px] h-11">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredJobs.length}</span> jobs found
            </p>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No jobs found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setDepartment("All Departments");
                  setJobType("All Types");
                  setLocation("All Locations");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </PageContainer>
  );
};

export default Careers;
