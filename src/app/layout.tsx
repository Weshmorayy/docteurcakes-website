import React from 'react';
import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/config/site';
import { generatePageMetadata } from '@/lib/seo';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = generatePageMetadata();

export const viewport: Viewport = {
  themeColor: '#c59737',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/brand/logo-transparent.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/brand/logo-transparent.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-surface-900">
        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg focus:shadow-xl"
        >
          Aller au contenu principal
        </a>

        {/* Global Structured Data */}
        <SchemaOrg />

        {/* Header Navigation */}
        <Header />

        {/* Main Content Body */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
