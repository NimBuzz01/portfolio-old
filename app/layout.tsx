import Header from "@/components/header";
import "./globals.css";
import { Archivo, Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  fallback: ["sans-serif"],
});

export const metadata = {
  title: "Niamat Marjan | Portfolio",
  description: "I'm Niamat, and I love to build web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="!scroll-smooth scrollbar-thin scrollbar-thumb-cmprimary scrollbar-track-cmsecondary dark:scrollbar-thumb-cmsecondary dark:scrollbar-track-cmprimary"
    >
      <body
        className={`${archivo.className} bg-cmsecondary text-cmprimary relative pt-28 sm:pt-36 dark:bg-cmprimary dark:text-cmsecondary dark:text-opacity-90`}
      >
        <div className="bg-[#fcd2d2] absolute top-[-6rem] -z-10 right-[11rem] h-[37.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#d2cdfc] absolute top-[-1rem] -z-10 left-[-35rem] h-[37.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <SpeedInsights />
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
