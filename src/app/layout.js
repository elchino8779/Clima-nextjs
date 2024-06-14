import { Rubik } from 'next/font/google';
import './globals.css';

const rubik_font = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
});

export const metadata = {
  title: 'Clima App',
  description: 'Clima Mundial',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={rubik_font.className}>{children}</body>
    </html>
  );
}
