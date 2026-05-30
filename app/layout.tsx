import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NIMT Greater Noida | Allied Health Admissions 2026-27 | BPT & BMRIT',
  description: 'Admissions Open for Bachelor of Physiotherapy (BPT) & B.Sc in Medical Radiology & Imaging Technology (BMRIT) at NIMT Greater Noida. Join the best allied health programmes with 100% real hospital clinical training and industry placements.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
