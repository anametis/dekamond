import { seoConfig } from "./seo-config";

export function generateDashboardStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Dekamond Dashboard",
    description:
      "Personal analytics dashboard with real-time insights and data visualization",
    url: `${seoConfig.baseUrl}/dashboard`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: seoConfig.siteName },
    publisher: { "@type": "Organization", name: seoConfig.siteName },
    potentialAction: {
      "@type": "ViewAction",
      target: `${seoConfig.baseUrl}/dashboard`,
    },
    featureList: [
      "Real-time Analytics",
      "Data Visualization",
      "Quick Actions",
      "Personalized Insights",
      "User Dashboard",
    ],
  };
}

export function generateLoginStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Dekamond Login",
    description:
      "Secure login page for accessing Dekamond's personal analytics dashboard and data visualization tools",
    url: `${seoConfig.baseUrl}/login`,
    isPartOf: {
      "@type": "WebSite",
      name: seoConfig.siteName,
      url: seoConfig.baseUrl,
    },
    author: { "@type": "Organization", name: seoConfig.siteName },
    publisher: { "@type": "Organization", name: seoConfig.siteName },
    potentialAction: {
      "@type": "ViewAction",
      target: `${seoConfig.baseUrl}/login`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: seoConfig.baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Login",
          item: `${seoConfig.baseUrl}/login`,
        },
      ],
    },
    mainEntity: {
      "@type": "WebApplication",
      name: seoConfig.siteName,
      description:
        "Personal analytics platform with dashboard and data visualization",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
    },
  };
}
