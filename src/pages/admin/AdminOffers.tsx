import { Plus, FileText, CheckCircle, XCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageContainer from "@/components/layout/PageContainer";

// Mock offer data
const mockOffers = [
  {
    id: "offer-1",
    candidateName: "Sneha Reddy",
    jobTitle: "UI/UX Designer",
    salary: "15 LPA",
    joiningDate: "2024-02-01",
    status: "accepted",
    sentAt: "2024-01-18",
  },
  {
    id: "offer-2",
    candidateName: "Rahul Sharma",
    jobTitle: "Senior Frontend Developer",
    salary: "22 LPA",
    joiningDate: "2024-02-15",
    status: "pending",
    sentAt: "2024-01-20",
  },
];

const AdminOffers = () => {
  const statusConfig = {
    pending: {
      icon: Clock,
      label: "Pending",
      className: "bg-warning/10 text-warning border-warning/20",
    },
    accepted: {
      icon: CheckCircle,
      label: "Accepted",
      className: "bg-success/10 text-success border-success/20",
    },
    rejected: {
      icon: XCircle,
      label: "Rejected",
      className: "bg-destructive/10 text-destructive border-destructive/20",
    },
  };

  return (
    <PageContainer>
      {/* Header */}
      <section className="bg-hero-gradient py-8 md:py-10">
        <div className="container-custom flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Offer Management
            </h1>
            <p className="text-white/80">
              Create and track job offers
            </p>
          </div>
          <Button variant="hero" size="lg">
            <Plus className="w-5 h-5 mr-2" />
            Create Offer
          </Button>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockOffers.map((offer) => {
              const StatusIcon = statusConfig[offer.status as keyof typeof statusConfig].icon;
              return (
                <Card key={offer.id} className="card-hover">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{offer.candidateName}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {offer.jobTitle}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full border flex items-center gap-1 ${
                          statusConfig[offer.status as keyof typeof statusConfig].className
                        }`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {statusConfig[offer.status as keyof typeof statusConfig].label}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Salary Package</p>
                        <p className="font-semibold text-foreground">{offer.salary}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Joining Date</p>
                        <p className="font-semibold text-foreground">
                          {new Date(offer.joiningDate).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Sent on{" "}
                      {new Date(offer.sentAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <FileText className="w-4 h-4 mr-1" />
                        View Offer
                      </Button>
                      {offer.status === "pending" && (
                        <Button size="sm" className="flex-1">
                          Send Reminder
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {mockOffers.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No Offers Created
              </h3>
              <p className="text-muted-foreground mb-6">
                Create your first job offer
              </p>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Offer
              </Button>
            </div>
          )}
        </div>
      </section>
    </PageContainer>
  );
};

export default AdminOffers;
