import Image from "next/image";
import { Poppins } from "next/font/google";
import Products from "@/components/Products";
import Navbar from "@/modules/Navbar";
import axios from "axios";
import https from "https"; // Import the https module

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home({ products }) {
  return (
    <main className={inter.className}>
      <Navbar />
      <Products products={products} />
    </main>
  );
}

export async function getStaticProps() {
  let data = []; // Default data in case of an error

  try {
    const agent = new https.Agent({ rejectUnauthorized: false });
    const response = await axios.get("https://16.171.13.216:5004/products", {
      httpsAgent: agent,
    });

    data = response.data; // Assign the data from the response
  } catch (error) {
    console.error(error);
  }

  return { props: { ...data } };
}
