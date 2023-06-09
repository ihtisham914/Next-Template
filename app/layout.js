import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "EMS",
  description: "Employee Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
