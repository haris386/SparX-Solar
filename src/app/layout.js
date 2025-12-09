import { Sora, Outfit } from "next/font/google";
import "./globals.css";

// Configure fonts
const sora = Sora({ subsets: ["latin"], weight: ["200", "300", "400", "600", "700"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "SparX Solar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Outfit = global font for body text */}
      <body className={outfit.className}>
        {/* Lexend = for headings */}
        <div className={sora.className}>{children}</div>
      </body>
    </html>
  );
}
