import HomeSceen from "@/components/HomeSceen";
import Login from "@/components/Login";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = false;
  return <div className="container">{session ? <HomeSceen /> : <Login />}</div>;
}
