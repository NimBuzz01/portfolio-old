import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";

const sfpro = localFont({
  src: [
    {
      path: "../fonts/sf-pro-display_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro-display_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
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
      className="!scroll-smooth scrollbar-thin scrollbar-thumb-neutral-500 scrollbar-track-gray-100"
    >
      <body
        className={`${sfpro.className} bg-slate-50 text-slate-900 relative pt-28 sm:pt-36 dark:bg-slate-900 dark:text-slate-100 dark:text-opacity-90`}
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
