import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata = {
  title: "Azamjon UI Kit | Dashboard va Hujjatlar",
  description:
    "Azamjonning UI kiti yordamida zamonaviy va samarali komponentlardan foydalanib dasturiy interfeyslarni yarating.",
  openGraph: {
    title: "Azamjon UI Kit | Dashboard va Hujjatlar",
    description:
      "Azamjon UI kiti komponentlari hujjatlari va boshqaruv paneli. Tezkor va zamonaviy interfeyslarni yaratish uchun foydalaning.",
    url: "https://yourdomain.com",
    images: [
      {
        url: "https://yourdomain.com/preview-image.jpg",
        width: 800,
        height: 600,
        alt: "Azamjon UI Kit Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azamjon UI Kit | Dashboard va Hujjatlar",
    description:
      "Tezkor va samarali dasturiy interfeyslar yaratish uchun Azamjon UI kiti komponentlaridan foydalaning.",
    images: ["https://yourdomain.com/preview-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        <title>Azamjon UI Kit | Dashboard vs Doc</title>
        <meta
          name="description"
          content="Azamjonning UI kiti yordamida zamonaviy va samarali komponentlardan foydalanib dasturiy interfeyslarni yarating."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="Azamjon UI Kit | Dashboard va Hujjatlar"
        />
        <meta
          property="og:description"
          content="Azamjon UI kiti komponentlari hujjatlari va boshqaruv paneli. Tezkor va zamonaviy interfeyslarni yaratish uchun foydalaning."
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/preview-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Azamjon UI Kit | Dashboard va Hujjatlar"
        />
        <meta
          name="twitter:description"
          content="Tezkor va samarali dasturiy interfeyslar yaratish uchun Azamjon UI kiti komponentlaridan foydalaning."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/preview-image.jpg"
        />
      </head>
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
