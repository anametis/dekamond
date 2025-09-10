import { DashboardContent } from "@/features/dashboard-content";
import { JsonLd } from "@/components/seo/json-ld";
import { dashboardMetadata } from "@/lib/metadata";
import { generateDashboardStructuredData } from "@/lib/structured-data";

export const metadata = dashboardMetadata;

export default function DashboardPage() {
  return (
    <>
      <JsonLd data={generateDashboardStructuredData()} />
      <main className="min-h-screen gradient-bg">
        <DashboardContent />
      </main>
    </>
  );
}
