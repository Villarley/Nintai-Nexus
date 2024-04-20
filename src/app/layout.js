
import "./globals.css";


export const metadata = {
  title: "Nintai Nexus",
  description: "Nintai Nexus website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
