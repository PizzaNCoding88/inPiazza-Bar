import "./globals.css";

export const metadata = {
  title: "inPiazza - Bar",
  description: "inPiazza Bar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
