import styles from "./BottomHeader.module.css";
import Link from "next/link";
import Sidebar from "./SideBar";

const BottomHeader = (props) => {
  return (
    <>
      <div className={styles.bottomNav}>
        <Sidebar showSideBar={props.showSideBar} />
        <Link className={styles.link} href="/">
          Customer Service
        </Link>
        <Link className={styles.link} href="/">
          Best Sellers
        </Link>
        <Link className={styles.link} href="/">
          Amazon Basics
        </Link>
        <Link className={styles.link} href="/">
          New Releases
        </Link>
        <select>
          <option>Prime</option>
        </select>
        <Link className={styles.link} href="/">
          Today's Deals
        </Link>
        <Link className={styles.link} href="/">
          Music
        </Link>
        <Link className={styles.link} href="/">
          Books
        </Link>
        <Link className={styles.link} href="/">
          Regisrty
        </Link>
        <Link className={styles.link} href="/">
          Fashion
        </Link>
        <Link className={styles.link} href="/">
          Amazon Home
        </Link>
        <Link className={styles.link} href="/">
          One Medical
        </Link>
        <Link className={styles.link} href="/">
          Gift Cards
        </Link>
        <Link className={styles.link} href="/">
          Pharmacy
        </Link>
        <Link className={styles.link} href="/">
          Make every day Earth Day
        </Link>
      </div>
    </>
  );
};

export default BottomHeader;
