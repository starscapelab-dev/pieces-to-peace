import './globals.css';
import { Open_Sans } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-openSans',
  display: 'swap',
});

export const metadata = {
  title: 'Pieces to Peace | Handcrafted Textiles & Fabrics',
  description: 'Individually created and made-to-order textiles designed with intention. Hand-drawn prints on certified fabrics, honouring a more conscious way of making.',
  keywords: 'handcrafted textiles, made-to-order fabrics, sustainable textiles, hand-drawn prints, GOTS certified, ethical fabrics, timeless design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
