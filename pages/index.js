import Image from "next/image";
import { Poppins } from "next/font/google";
import NavbarDesktop from "@/components/NavbarDesktop";
import Product from "@/components/Product";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={inter.className}>
      <NavbarDesktop />
      <Product />
    </main>
  );
}
