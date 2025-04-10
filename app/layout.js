import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Green Slumber | Eco-Friendly Luxury Bedding",
  description: "Premium sustainable bedding for conscious luxury. Discover our collection of organic cotton, bamboo, and linen bedding products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${cormorant.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
