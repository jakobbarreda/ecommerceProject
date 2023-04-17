import Head from "next/head";
import { Inter } from "next/font/google";
import Container from "@/components/card/Container";
import Carousel from "@/components/carousel/Carousel";
import CardLayout from "@/components/card/CardLayout";
import WideCardLayout from "@/components/card/WideCardLayout/WideCardLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head></Head>
      <Container>
        <Carousel />
        <CardLayout />
        <WideCardLayout />
      </Container>
    </>
  );
}
