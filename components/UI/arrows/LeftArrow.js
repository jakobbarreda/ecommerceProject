import Link from "next/link";
import styles from "./leftArrow.module.css";

const LeftArrow = () => {
  return (
    <Link href="/">
      <i className={styles.arrow}>&#60;</i>
    </Link>
  );
};

export default LeftArrow;
