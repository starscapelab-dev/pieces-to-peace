import './globals.css';
import { Lora, Open_Sans } from 'next/font/google';

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lora',
  display: 'swap',
});

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
    <html lang="en" className={`${lora.variable} ${openSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
