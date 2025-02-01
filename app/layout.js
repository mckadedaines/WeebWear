import { Inter, Poppins, Bangers } from "next/font/google";
import MainLayout from "../src/components/layout/MainLayout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bangers = Bangers({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bangers",
});

export const metadata = {
  title: "WeebWear - Anime Inspired Fashion",
  description:
    "Your premier destination for anime-inspired fashion and streetwear.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${bangers.variable}`}
    >
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
