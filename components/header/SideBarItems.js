import Link from "next/link";
import styles from "./sideBarItems.module.css";

const SideBarItems = () => {
  return (
    <>
      <div className={styles.container}>
        <section>
          <h2>Trending</h2>
          <div className={styles.listLinks}>
            <Link href="/">Best Sellers</Link>
          </div>
          <div className={styles.listLinks}>
            <Link href="/">New Releases</Link>
          </div>
          <div className={styles.listLinks}>
            <Link href="/">Movers & shakers</Link>
          </div>
        </section>

        <br />

        <section>
          <h2>Digital Content & Devices</h2>
          <div className={styles.listLinks}>
            <Link href="/">Prime Video</Link>
          </div>
          <div className={styles.listLinks}>
            <Link href="/">Amazon Music</Link>
          </div>
        </section>

        <br />

        <section>
          <h2>Shop By Department</h2>
          <Link href="/">Clothin, Shoes, Jewerly & watches</Link>
        </section>
      </div>
    </>
  );
};

export default SideBarItems;
