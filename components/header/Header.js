import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import BottomHeader from "./BottomHeader";

const Header = (props) => {
  return (
    <>
      <div className={styles.mainNav}>
        <div className={styles.container}>
          <Link href="/">
            <Image src="/logo.jpg" width={150} height={50} />
          </Link>
        </div>

        <select>
          <option>Amazon Prime</option>
        </select>
        <input
          name="search"
          placeholder="Search"
          className={styles.search}
        ></input>
        <button>Search</button>

        <div className={styles.container}>
          <div className={styles.items}>
            <span>Language</span>
          </div>
          <div className={styles.items}>
            <span>Sign In</span>
          </div>
          <div className={styles.items}>
            <span>Return/Orders</span>
          </div>
          <div className={styles.items}>
            <span>cart</span>
          </div>
        </div>
      </div>
      <BottomHeader showSideBar={props.showSideBar} />
    </>
  );
};

export default Header;
