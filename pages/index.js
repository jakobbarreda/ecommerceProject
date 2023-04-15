import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head></Head>
      <main>
        <h1>main page</h1>
      </main>
    </>
  );
}
