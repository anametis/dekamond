import type { Metadata } from "next";
import { seoConfig } from "./seo-config";

const commonMetadata = {
  authors: [{ name: "Dekamond Team" }],
  creator: seoConfig.siteName,
  publisher: seoConfig.siteName,
  metadataBase: new URL(seoConfig.baseUrl),
  formatDetection: { email: false, address: false, telephone: false },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export const rootMetadata: Metadata = {
  ...commonMetadata,
  title: {
    default: `${seoConfig.siteName} - ${seoConfig.siteDescription}`,
    template: `%s | ${seoConfig.siteName}`,
  },
  description:
    "Dekamond is a powerful personal analytics platform that helps you track, visualize, and understand your data with beautiful dashboards and real-time insights.",
  keywords: [
    "analytics",
    "dashboard",
    "data visualization",
    "personal analytics",
    "insights",
    "metrics",
    "dekamond",
    "business intelligence",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoConfig.baseUrl,
    siteName: seoConfig.siteName,
    title: `${seoConfig.siteName} - ${seoConfig.siteDescription}`,
    description:
      "Powerful personal analytics platform with beautiful dashboards and real-time insights.",
  },
};

export const dashboardMetadata: Metadata = {
  ...commonMetadata,
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
  alternates: { canonical: "/dashboard" },
  openGraph: {
    title: "Dashboard | Dekamond - Your Personal Analytics Hub",
    description:
      "Access your personalized dashboard with real-time analytics, quick actions, and comprehensive insights.",
    url: `${seoConfig.baseUrl}/dashboard`,
    siteName: seoConfig.siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | Dekamond - Your Personal Analytics Hub",
    description:
      "Access your personalized dashboard with real-time analytics, quick actions, and comprehensive insights.",
    creator: "Ali SPR",
    site: "Ali SPR",
  },
  classification: "Business Dashboard",
};

export const loginMetadata: Metadata = {
  ...commonMetadata,
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
  alternates: { canonical: "/login" },
  openGraph: {
    title: "Login | Dekamond - Access Your Analytics Dashboard",
    description:
      "Sign in to your Dekamond account to access your personalized analytics dashboard and real-time insights.",
    url: `${seoConfig.baseUrl}/login`,
    siteName: seoConfig.siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | Dekamond - Access Your Analytics Dashboard",
    description:
      "Sign in to your Dekamond account to access your personalized analytics dashboard and real-time insights.",
    creator: "Ali SPR",
    site: "Ali SPR",
  },
  classification: "Authentication Page",
};
