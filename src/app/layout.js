import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Surbhi Stationer & Gift House | Premium Stationery & Gifts in Kolhapur',
  description: 'Your one-stop destination for premium stationery, thoughtful gifts, school supplies, and art materials in Kolhapur. Quality you can trust, prices you\'ll love.',
  keywords: 'stationery, gifts, school supplies, art materials, Kolhapur, notebooks, pens, craft, Surbhi',
  authors: [{ name: 'Surbhi Stationer & Gift House' }],
  openGraph: {
    title: 'Surbhi Stationer & Gift House',
    description: 'Premium stationery, gifts, school supplies & art materials in Kolhapur',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
