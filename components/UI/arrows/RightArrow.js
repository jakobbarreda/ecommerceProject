import Link from "next/link";
import styles from "./leftArrow.module.css";

const RightArrow = () => {
  return (
    <Link href="/">
      <i className={styles.arrow}>&#62;</i>
    </Link>
  );
};

export default RightArrow;
