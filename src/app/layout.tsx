import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dekamond - Your Personal Analytics Hub",
    template: "%s | Dekamond",
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
  authors: [{ name: "Dekamond Team" }],
  creator: "Dekamond",
  publisher: "Dekamond",
  metadataBase: new URL("https://dekamond.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dekamond.com",
    siteName: "Dekamond",
    title: "Dekamond - Your Personal Analytics Hub",
    description:
      "Powerful personal analytics platform with beautiful dashboards and real-time insights.",
    images: [
      {
        url: "/og-image.png", // You should create this image
        width: 1200,
        height: 630,
        alt: "Dekamond - Personal Analytics Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dekamond - Your Personal Analytics Hub",
    description:
      "Powerful personal analytics platform with beautiful dashboards and real-time insights.",
    images: ["/twitter-image.png"], // You should create this image
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
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Dekamond",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
