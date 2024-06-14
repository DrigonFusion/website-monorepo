import "~/styles/globals.css";
import "~/styles/other.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import {
  ClerkProvider
} from '@clerk/nextjs';
import { Navbar } from "@/components/navbar";
import Footer from "~/components/footer";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "DrigonFusion",
  description: "DrigonFusion is a collection of websites including game reviews, code refrences, and more.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { getUserData } from "~/api/api";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let PFP = await getUserData.pfp.get();
  if (!PFP) {
    PFP = "";
  }
  let userName = await getUserData.name.get.nickname();
  if (!userName) {
    userName = await getUserData.name.get.first();
  } else {
    userName = "Please sign in";
  }
  return (
    <ClerkProvider>
      <html lang="en">
        <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground",
          fontSans.variable
        )}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="min-h-screen">
                <Navbar userPFP={PFP} userName={userName!} />
                {children}
              </div>
              <Footer />
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
