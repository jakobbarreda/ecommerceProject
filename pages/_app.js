import Header from "@/components/header/topHeader/Header";
import SideBarItems from "@/components/header/sideBar/SideBarItems";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [showSideBar, setShowSideBar] = useState(false);

  const showSideBarHandler = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <>
      <Header showSideBar={showSideBarHandler} />
      {showSideBar && <SideBarItems />}
      <Component {...pageProps} />
    </>
  );
}
