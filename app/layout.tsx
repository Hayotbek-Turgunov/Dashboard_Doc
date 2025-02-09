import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>My App - Best ERP Solution</title>

        <meta
          name="description"
          content="My App is a modern ERP solution designed for educational centers. Manage students, teachers, and finance seamlessly."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="My App - Best ERP Solution" />
        <meta
          property="og:description"
          content="A powerful ERP solution tailored for educational centers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/preview-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My App - Best ERP Solution" />
        <meta
          name="twitter:description"
          content="A powerful ERP solution tailored for educational centers."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/preview-image.jpg"
        />
      </Head>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="ml-3 mt-3" />
          <main className="flex-1 overflow-auto pt-16">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
