import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Header from "./components/Header";
import "./styles/index.scss";

import "./globals.css";
import Footer from "./components/Footer";
import { PageContextProvider } from "./context/PageContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const MarcinAntiqueStandardBook = localFont({
  // src: './styles/fonts/Selecta-Medium.woff2',
  variable: "--font-primary",
  src: [
    {
      path: "./styles/fonts/MarcinAntiqueStandard-Book.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./styles/fonts/MarcinAntiqueStandard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "MARCOTTE",
  description: "Aïdan Marcotte is a florist based in Paris",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang='en'
      className={`${MarcinAntiqueStandardBook.className} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        <PageContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </PageContextProvider>
      </body>
    </html>
  );
}
