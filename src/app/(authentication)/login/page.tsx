"use client";

import { RouteGuard } from "@/components/common/route-guard";
import { LoginForm } from "@/features/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Dekamond - Access Your Analytics Dashboard",
  description:
    "Sign in to your Dekamond account to access your personalized analytics dashboard, real-time insights, and data visualization tools. Secure login with modern authentication.",
  keywords: [
    "login",
    "sign in",
    "authentication",
    "dekamond login",
    "analytics dashboard",
    "user account",
    "secure login",
    "data access",
    "personal analytics",
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
    canonical: "/login",
  },
  openGraph: {
    title: "Login | Dekamond - Access Your Analytics Dashboard",
    description:
      "Sign in to your Dekamond account to access your personalized analytics dashboard and real-time insights.",
    url: "/login",
    siteName: "Dekamond",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-login.png", // You should create this image
        width: 1200,
        height: 630,
        alt: "Dekamond Login - Access Your Analytics Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | Dekamond - Access Your Analytics Dashboard",
    description:
      "Sign in to your Dekamond account to access your personalized analytics dashboard and real-time insights.",
    images: ["/twitter-login.png"], // You should create this image
    creator: "@dekamond", // Replace with your actual Twitter handle
    site: "@dekamond", // Replace with your actual Twitter handle
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
  },
  category: "technology",
  classification: "Authentication Page",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Dekamond Login",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function LoginPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Dekamond Login",
            description:
              "Secure login page for accessing Dekamond's personal analytics dashboard and data visualization tools",
            url: "https://dekamond.com/login",
            isPartOf: {
              "@type": "WebSite",
              name: "Dekamond",
              url: "https://dekamond.com",
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
              target: "https://dekamond.com/login",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://dekamond.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Login",
                  item: "https://dekamond.com/login",
                },
              ],
            },
            mainEntity: {
              "@type": "WebApplication",
              name: "Dekamond",
              description:
                "Personal analytics platform with dashboard and data visualization",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web Browser",
            },
          }),
        }}
      />

      <RouteGuard requireAuth={false} redirectTo="/dashboard">
        <LoginForm />
      </RouteGuard>
    </>
  );
}
