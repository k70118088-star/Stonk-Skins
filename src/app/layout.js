import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"]
// })


export const metadata = {
  title: "Stonk Skins",
  description: "",
  openGraph: {
    title: "Stonk Skins",
    description: "",
    images: ["/hero.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable}  h-full antialiased`}
    >
      <body style={{ backgroundImage: `url('/assets/bg-lines.png')` }} className="min-h-full bg-[#220C30] flex flex-col bg-cover bg-center">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
