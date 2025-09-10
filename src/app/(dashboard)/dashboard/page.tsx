import { DashboardContent } from "@/features/dashboard-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Dekamond - Your Personal Analytics Hub",
  description:
    "Access your personalized dashboard with real-time analytics, quick actions, and comprehensive insights. Manage your data and track your progress with Dekamond's intuitive interface.",
  keywords: [
    "dashboard",
    "analytics",
    "personal dashboard",
    "data visualization",
    "insights",
    "dekamond",
    "user interface",
    "metrics",
    "statistics",
  ],
  authors: [{ name: "Dekamond Team" }],
  creator: "Dekamond",
  publisher: "Dekamond",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dekamond.com"), // Replace with your actual domain
  alternates: {
    canonical: "/dashboard",
  },
  openGraph: {
    title: "Dashboard | Dekamond - Your Personal Analytics Hub",
    description:
      "Access your personalized dashboard with real-time analytics, quick actions, and comprehensive insights.",
    url: "/dashboard",
    siteName: "Dekamond",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual verification code
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Business Dashboard",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Dekamond Dashboard",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function DashboardPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Dekamond Dashboard",
            description:
              "Personal analytics dashboard with real-time insights and data visualization",
            url: "https://dekamond.com/dashboard",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            author: {
              "@type": "Organization",
              name: "Dekamond",
            },
            publisher: {
              "@type": "Organization",
              name: "Dekamond",
            },
            potentialAction: {
              "@type": "ViewAction",
              target: "https://dekamond.com/dashboard",
            },
            featureList: [
              "Real-time Analytics",
              "Data Visualization",
              "Quick Actions",
              "Personalized Insights",
              "User Dashboard",
            ],
          }),
        }}
      />

      <main className="min-h-screen gradient-bg">
        <DashboardContent />
      </main>
    </>
  );
}
