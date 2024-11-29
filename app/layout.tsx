import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';
import { EB_Garamond } from 'next/font/google';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
});

export const metadata: Metadata = {
  title: 'Next Storefront',
  description: 'E-commerce store built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ebGaramond.className}>
          <Providers>
            <Navbar />
            <Container className="py-20">{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
