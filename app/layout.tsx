import "./globals.css";
import Providers from "./utils/provider";

export const metadata = {
  title: "Max Movies",
  description: "Max's Movie Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
