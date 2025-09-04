import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@/components/Header').then(m => m.Header), { loading: () => null });
const Footer = dynamic(() => import('@/components/Footer').then(m => m.Footer), { loading: () => null });
const Toaster = dynamic(() => import('@/components/ui/toaster').then(m => m.Toaster), { loading: () => null });
import { ThemeProvider } from '@/components/ThemeProvider';
import { PT_Sans, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Nour'dev",
  description: "Portfolio de Nour, développeur Front-End créatif.",
};

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-body antialiased flex flex-col", ptSans.variable, playfairDisplay.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
