import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div id={styles.mainNav}>
        <div className={(styles.container, styles.link)}>
          <Link href="/">Logo</Link>
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

        <div>
          <div className={styles.container}>
            <span>Language</span>
          </div>
          <div className={styles.container}>
            <span>Sign In</span>
          </div>
          <div className={styles.container}>
            <span>Return/Orders</span>
          </div>
          <div className={styles.container}>
            <span>cart</span>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Header;
