import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import BottomHeader from "../bottomHeader/BottomHeader";
import LinkBlock from "./LinkBlock";

const Header = (props) => {
  return (
    <>
      <div className={styles.mainNav}>
        <div className={`${styles.container} ${styles.logo}`}>
          <Link href="/">
            <Image src="/logos.jpg" width={150} height={50} />
          </Link>
        </div>

        <div className={styles.container}>
          <div className={styles.address}>
            <LinkBlock
              href={"/"}
              message={"Hello"}
              message2={"Select your address"}
            />
          </div>
        </div>

        <form className={styles.form}>
          <select className={styles.departments}>
            <option>All</option>
            <option>Amazon Prime</option>
          </select>
          <input
            name="search"
            placeholder="Search Amazon"
            className={styles.search}
          ></input>
          <button className={styles.lookup}>&#128269;</button>
        </form>

        <div className={styles.container}>
          <div className={styles.language}>
            <LinkBlock href={"/"} message2={`EN`} />
          </div>
          <div className={styles.signIn}>
            <LinkBlock
              href={"/"}
              message={"Hello, sign in"}
              message2={"Account & Lists"}
            />
          </div>
          <div className={styles.returns}>
            <LinkBlock href={"/"} message={"Returns"} message2={"& Orders"} />
          </div>
          <div className={styles.cart}>
            <LinkBlock href={"/"} message2={"Cart"} />
          </div>
        </div>
      </div>
      <BottomHeader showSideBar={props.showSideBar} />
    </>
  );
};

export default Header;
