import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="ml-3 mt-3" />
          <main className="flex-1 overflow-auto p-8 pt-16">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
