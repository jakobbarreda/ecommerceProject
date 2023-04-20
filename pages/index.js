import Head from "next/head";
import { Inter } from "next/font/google";
import Container from "@/components/card/Container";
import CardLayout from "@/components/card/CardLayout";
import WideCardLayout from "@/components/card/WideCardLayout/WideCardLayout";
import CarouselImages from "@/components/carousel/CarouselImages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/8417eb93cc.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <CarouselImages />
      <Container>
        <CardLayout />
        {/* <WideCardLayout title="Trending Deals" /> */}
      </Container>
    </>
  );
}
