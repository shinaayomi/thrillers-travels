import Image from "next/image";
import { Inter } from "next/font/google";
import PageLayout from "@/components/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <PageLayout />
    </main>
  );
}
