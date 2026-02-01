import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className = "" }: PageContainerProps) => {
  return (
    <main className={`min-h-screen ${className}`}>
      {children}
    </main>
  );
};

export default PageContainer;
