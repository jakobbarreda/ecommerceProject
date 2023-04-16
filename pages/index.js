import Head from "next/head";
import { Inter } from "next/font/google";
import Container from "@/components/card/Container";
import Carousel from "@/components/carousel/Carousel";
import CardLayout from "@/components/card/CardLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head></Head>
      <Container>
        <main>
          <Carousel />
          <CardLayout />
        </main>
      </Container>
    </>
  );
}
