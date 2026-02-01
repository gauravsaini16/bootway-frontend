import { Link } from "react-router-dom";
import { Briefcase, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageContainer from "@/components/layout/PageContainer";
import StatusBadge from "@/components/common/StatusBadge";
import PipelineStepper from "@/components/common/PipelineStepper";
import { mockApplications } from "@/data/mockData";

const MyApplications = () => {
  // Using mock data - in production this would come from auth/API
  const applications = mockApplications;

  return (
    <PageContainer>
      {/* Header */}
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Applications
          </h1>
          <p className="text-white/80 text-lg">
            Track the status of your job applications and upcoming interviews.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          {applications.length > 0 ? (
            <div className="space-y-6">
              {applications.map((app) => (
                <Card key={app.id} className="overflow-hidden card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      {/* Job Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">
                              {app.jobTitle}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              Applied on {new Date(app.appliedAt).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                          <StatusBadge status={app.status} />
                        </div>

                        {/* Pipeline */}
                        <div className="mb-6 pt-2">
                          <PipelineStepper
                            currentStep={app.status}
                            isRejected={app.status === "rejected"}
                          />
                        </div>

                        {/* Status Message */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {app.status === "interview" && (
                            <>
                              <Calendar className="w-4 h-4 text-primary" />
                              <span>Interview scheduled - Check details below</span>
                            </>
                          )}
                          {app.status === "screening" && (
                            <>
                              <Clock className="w-4 h-4 text-warning" />
                              <span>Your application is being reviewed</span>
                            </>
                          )}
                          {app.status === "shortlisted" && (
                            <>
                              <Clock className="w-4 h-4 text-primary" />
                              <span>You've been shortlisted! Interview will be scheduled soon.</span>
                            </>
                          )}
                          {app.status === "selected" && (
                            <>
                              <Clock className="w-4 h-4 text-success" />
                              <span>Congratulations! You've been selected.</span>
                            </>
                          )}
                          {app.status === "applied" && (
                            <>
                              <Clock className="w-4 h-4 text-info" />
                              <span>Your application has been received</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2 lg:w-48">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/my-applications/${app.id}`}>
                            View Details
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                        {app.status === "interview" && (
                          <Button size="sm" asChild>
                            <Link to={`/my-applications/${app.id}/interview`}>
                              View Interview
                            </Link>
                          </Button>
                        )}
                        {app.status === "selected" && (
                          <Button size="sm" variant="success" asChild>
                            <Link to={`/offer/${app.id}`}>
                              View Offer
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No Applications Yet
              </h3>
              <p className="text-muted-foreground mb-6">
                Start your journey by exploring our open positions.
              </p>
              <Button asChild>
                <Link to="/careers">
                  Browse Jobs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </PageContainer>
  );
};

export default MyApplications;
